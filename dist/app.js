"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const summary_routes_1 = __importDefault(require("./routes/summary-routes"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const currentServices_routes_1 = __importDefault(require("./routes/currentServices-routes"));
const availableServices_routes_1 = __importDefault(require("./routes/availableServices-routes"));
const details_routes_1 = __importDefault(require("./routes/details-routes"));
const rateService_routes_1 = __importDefault(require("./routes/rateService-routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)()); // json middelware to parse json data
dotenv_1.default.config();
app.use("/user", user_routes_1.default);
app.use("/bank", summary_routes_1.default);
app.use("/bank", currentServices_routes_1.default);
app.use("/bank", availableServices_routes_1.default);
app.use("/details", details_routes_1.default);
app.use("/", rateService_routes_1.default);
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = "mongodb+srv://perennialsys:perennialsys@cluster0.icoae.mongodb.net/bank?retryWrites=true&w=majority";
// connection with mongodb
mongoose_1.default
    .connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err.message));
