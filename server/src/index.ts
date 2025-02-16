import express from "express";
import { Request, Response } from "express";
import cors from "cors";

const PORT = 5000,
  app = express();

// Enable CORS to allow requests from client-side (port 3000)
app.use(cors());

app.get("/api/v1", (req: Request, res: Response) => {
  res.send("hello !!!!");
});

app.listen(PORT, () => console.log(`Start listening on port : ${PORT}`));
