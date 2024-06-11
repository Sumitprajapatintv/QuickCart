import User from "../model/userSchema"
import IUser from "../interfaces/IUser";
const signupService = async (inputData: any, user: any): Promise<{ data: any; err: any }> => {
  try {
    const result = await User.create(...inputData);
    return { data: null, err: null };
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