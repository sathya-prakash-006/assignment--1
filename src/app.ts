import express from "express";
import userRoutes from "./routes/user-routes";
import summaryRoutes from "./routes/summary-routes";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import currentServices from "./routes/currentServices-routes";
import availableservices from "./routes/availableServices-routes";
import details from "./routes/details-routes";

const app = express();

app.use(cors());
app.use(json()); // json middelware to parse json data



app.use("/user", userRoutes);
app.use("/bank", summaryRoutes);
app.use("/bank", currentServices);
app.use("/bank", availableservices);
app.use("/details", details);

const PORT = 8000;
const CONNECTION_URL =
  "mongodb+srv://perennialsys:perennialsys@cluster0.icoae.mongodb.net/bank?retryWrites=true&w=majority";

// connection with mongodb
mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`))) //its is an promice .then acepts callback
  .catch((err) => console.log(err.message));
