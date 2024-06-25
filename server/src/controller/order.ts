import { Request, Response, NextFunction } from "express";
import { createService, listService, getService, updateService } from "@/service/order";
import { badResponse, internalErrorResponse, successResponse } from "../utility/responseParser";

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id, err } = await createService(req.body as any, undefined);

    if (_id && !err) return successResponse(res, { item: { _id } });
    else return badResponse(res, { errors: (err) });
  } catch (e) {
    return internalErrorResponse(e, next);
  }
};
export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { list, count, err } = await listService(req.body as any, undefined);

    if (list && count) return successResponse(res, { data: { list, count } });
    else return badResponse(res, { errors: (err) });
  } catch (e) {
    return internalErrorResponse(e, next);
  }
};

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { item, err } = await getService(req.params._id as string, req.body.currentUser);

    if (item) return successResponse(res, { ...item });

    else return badResponse(res, { errors: (err) });
  } catch (e) {
    return internalErrorResponse(e, next);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id, err } = await updateService(req.params._id as string, req.body as any, req.body.currentUser);

    if (_id && !err) return successResponse(res, { item: { _id } });
    else return badResponse(res, { errors: (err) });
  } catch (e) {
    return internalErrorResponse(e, next);
  }
};


