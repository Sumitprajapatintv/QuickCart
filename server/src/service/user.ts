import User from "../model/userSchema"
import IUser from "../interfaces/IUser";
import { randomBytes } from 'crypto';
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

const login = async (inputData: any, user: any) => {
  try {
    const result = await User.create(...inputData);
    return result;
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