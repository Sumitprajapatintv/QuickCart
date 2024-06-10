import { Request } from "express";
import { NextFunction } from "express";
import { signupService } from "../service/user";
import { badResponse, internalErrorResponse, successResponse } from "../utility/responseParser";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id, err } = await signupService(req.body as any, undefined);

    if (_id && !err) {
      return successResponse(res, { data: _id })
    }
    else {
      badResponse(res, { err: err })
    }

  } catch (error) {
    console.log(error);
    return internalErrorResponse(res, { err: error });
  };
}


export { signup };