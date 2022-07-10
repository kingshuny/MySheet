import express, { Request, Response } from "express";

const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World222!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import mongoose from "mongoose";
mongoose
  .connect(
    // "mongodb+srv://mysheet:mysheet!@cluster0.kwmm1.mongodb.net/?retryWrites=true&w=majority",
    "mongodb://localhost:27017",
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB conected"))
  .catch((err: any) => {
    console.log(err);
  });
