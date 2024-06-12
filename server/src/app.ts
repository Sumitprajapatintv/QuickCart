import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import defaultRoutes from './api'
import connectDb from './utils/connectDb';
import bodyParser from 'body-parser';
dotenv.config();
const morgan = require("morgan");

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));

app.use(bodyParser.json())

connectDb();

app.use('/api', defaultRoutes());


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

