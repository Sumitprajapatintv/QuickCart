import { Request, Response, NextFunction } from "express";
import { createService } from "./../service/product";
import { badResponse, internalErrorResponse, successResponse } from "../utility/responseParser";

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {

    console.log("Hew;;p");
    const { _id, err } = await createService(req.body as any, undefined);

    if (_id && !err) return successResponse(res, { item: { _id } });
    else return badResponse(res, { errors: (err) });
  } catch (e) {
    return internalErrorResponse(e, next);
  }
};


