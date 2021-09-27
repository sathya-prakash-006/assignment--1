"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const summary_controller_1 = require("../controllers/summary-controller");
const router = (0, express_1.Router)();
// CREATE ACCOUNT AND LOGIN
router.post("/summary", summary_controller_1.createSummary);
router.get("/summary", summary_controller_1.getSummary);
router.get("/summary/:id", summary_controller_1.getSummaryById);
exports.default = router;
