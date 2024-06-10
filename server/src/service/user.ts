import User from "../model/userSchema"
const signupService = async (inputData: any, user: any) => {
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