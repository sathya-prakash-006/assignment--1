import express from "express";
import bankRoutes from "./routes/bank";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import logger from "./middleware/logger";

const app = express();

app.use(cors());
app.use(json()); // json middelware to parse json data
app.use(logger);

app.use("/bank", bankRoutes);


const PORT = 7000;
const CONNECTION_URL =
  "mongodb+srv://sathya06:sathya06@cluster0.cunjy.mongodb.net/memories-app?retryWrites=true&w=majority";

// connection with mongodb
mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`))) //its is an promice .then acepts callback
  .catch((err) => console.log(err.message));
