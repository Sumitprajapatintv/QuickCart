import { Response } from 'express';
import { NextFunction } from 'express';

const internalErrorResponse = (error: any, next: NextFunction) => {
  error.status = error.status || 500;
  error.msg = error.message || error.msg;
  next(error);
};

const successResponse = (res: Response, data: any) => {
  return res.status(200).json({ success: true, ...data });
};

const badResponse = (res: Response, data: any) => {
  return res.status(400).json({ success: false, ...data });
};

const unauthorizedResponse = (res: Response, data: any) => {
  data.success = false;
  return res.status(401).json({ success: false, ...data });
};

const forbiddenResponse = (res: Response, data: any) => {
  data.success = false;
  return res.status(403).json({ success: false, ...data });
};

export { internalErrorResponse, successResponse, badResponse, unauthorizedResponse, forbiddenResponse };
