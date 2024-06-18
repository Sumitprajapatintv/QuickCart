import User from "../model/userSchema"
import IUser from "../interfaces/IUser";
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import config from './../config/keys'
const signupService = async (inputData: any, user: any): Promise<{ data: any; err: any }> => {
  try {
    const salt = randomBytes(32);
    const hashedPassword = await argon2.hash(inputData?.password, { salt });

    const result = await User.find({ email: inputData?.email })

    if (result.length != 0) {
      return { data: null, err: [{ code: 'User already Exist' }] };
    }
    const userRecord = await User.create({
      ...inputData,
      type: 'admin',
      salt: salt.toString('hex'),
      password: hashedPassword,
    });
    if (userRecord) {
      return { data: userRecord?._id, err: null };
    }
    else {
      return { data: null, err: null };
    }
  } catch (error) {
    return { data: null, err: null };
  }
}

const loginService = async (inputData: any, user: any): Promise<{ data: any; token: any, err: any }> => {
  try {
    const userRecord = await User.findOne({
      email: inputData?.email,
      // $or: [{ email: new RegExp('^' + _.escapeRegExp(email) + '$', 'i') }, { phone: new RegExp('^' + _.escapeRegExp(email) + '$', 'i') }],
    });
    if (!userRecord) {
      return { data: null, token: null, err: ['Record Not Found'] }
    }
    const userJSON: any = userRecord.toJSON()
    const validPassword = await argon2.verify(userJSON.password, inputData?.password);

    if (validPassword) {
      if (validPassword) {
        const secretKey = config.JWT_SECRET_KEY || 'defaultSecretKey'; // Ensure you replace 'defaultSecretKey' with a secure key for production

        const token = jwt.sign({ _id: userJSON._id?.toString() }, secretKey, {
          expiresIn: '2 days',
        });

        // Continue with your logic, e.g., sending the token back to the client
        return { data: userJSON, token: token, err: [] };
      }

    }

    return { data: null, token: null, err: [{ code: 'INVALID_PASSWORD', msg: "Invalid Password" }] };

  } catch (error) {
    return { data: null, token: null, err: [{ code: 'INVALID_PASSWORD', msg: "Invalid Password" }] };
  }
}

const get = async (inputData: any, user: any) => {
  try {
    const result = await User.create(...inputData);
    return result;
  } catch (error) {
    return error;
  }
}

const list = async (inputData: any, user: any) => {
  try {
    const result = await User.create(...inputData);
    return result;
  } catch (error) {
    return error;
  }
}


const update = async (inputData: any, user: any) => {
  try {
    const result = await User.create(...inputData);
    return result;
  } catch (error) {
    return error;
  }
}

export {
  signupService,
  loginService
};