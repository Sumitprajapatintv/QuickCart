import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import config from './../config/keys'
function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const secretKey = config.JWT_SECRET_KEY || 'defaultSecretKey';
    const decoded = jwt.verify(token, secretKey);
    // req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;