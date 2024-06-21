import User from "../model/userSchema"
import IUser from "../interfaces/IUser";
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import config from '../config/keys'
import Product from '../model/product'
const createService = async (inputData: any, user: any): Promise<{ _id: any; err: any }> => {
  try {
    const item = await Product.create({
      ...inputData,
      createdBy: (user && user?._id) || undefined,
    });
    if (!item) {
      return { _id: null, err: [{ code: 'RECORD_NOT_CREATED' }] };
      // throw new Error('Company cannot be created');
    }

    const itemJSON = item.toObject();
    return { _id: itemJSON._id, err: null };
  } catch (error) {
    return { _id: null, err: [{ code: error }] };
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
  createService,
};