import { Request, Response, NextFunction } from "express";
import { signupService, loginService } from "../service/user";
import { badResponse, internalErrorResponse, successResponse } from "../utility/responseParser";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, err } = await signupService(req.body as any, undefined);

    if (data && !err) {
      return successResponse(res, { data: data });
    } else {
      return badResponse(res, { err: err });
    }
  } catch (e) {
    console.log(e);
    return internalErrorResponse(e, next);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, token, err } = await loginService(req.body as any, undefined);

    if (data && token) {
      return successResponse(res, { data: data, tokens: token });
    } else {
      return badResponse(res, { err: err });
    }
  } catch (e) {
    console.log(e);
    return internalErrorResponse(e, next);
  }
};

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, err } = await signupService(req.body as any, undefined);

    if (data && !err) {
      return successResponse(res, { data: data });
    } else {
      return badResponse(res, { err: err });
    }
  } catch (e) {
    console.log(e);
    return internalErrorResponse(e, next);
  }
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, err } = await signupService(req.body as any, undefined);

    if (data && !err) {
      return successResponse(res, { data: data });
    } else {
      return badResponse(res, { err: err });
    }
  } catch (e) {
    console.log(e);
    return internalErrorResponse(e, next);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, err } = await signupService(req.body as any, undefined);

    if (data && !err) {
      return successResponse(res, { data: data });
    } else {
      return badResponse(res, { err: err });
    }
  } catch (e) {
    console.log(e);
    return internalErrorResponse(e, next);
  }
};
