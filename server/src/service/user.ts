import User from "../model/userSchema"
import IUser from "../interfaces/IUser";
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
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
      return { data: null, token: null, err: { ['Record Not Found']} }
    }
    const userJSON: any = userRecord.toJSON()
    const validPassword = await argon2.verify(userJSON.password, inputData?.password);
    if (validPassword) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h',
      });
      return res.status(200).json({ token });
      // logger.silly('Password is valid!');
      // logger.silly('Generating JWT');
      // const user = authHelper.hideSecrets(userJSON);

      // const { token: accessToken, issued, expires } = encodeSession(process.env.JWT_SECRET, user, config.accessTokenExpiryTime);
      // const { token: refreshToken, issued: refreshIssued, expires: refreshExpires } = encodeSession(process.env.JWT_REFRESH_TOKEN_SECRET, user, config.refreshTokenExpiryTime);

      // /**
      //  * Easy as pie, you don't need passport.js anymore :)
      //  */

      // return { user, tokens: { accessToken, refreshToken }, err: null };

    } else {
      return { data: null, token: null, err: [{ code: 'INVALID_PASSWORD', msg: "Invalid Password" }] };
    }
  } catch (error) {
    return error;
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
  signupService
};