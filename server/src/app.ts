import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import defaultRoutes from './api'
dotenv.config();
const morgan = require("morgan");

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));

// define routes here
// app.use("/", (req, res) => {
//   res.send("Hello Worlds");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
// console.log("Hello From ExpressJs");

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api', defaultRoutes());


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

