"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const details_controllre_1 = require("../controllers/details-controllre");
const router = (0, express_1.Router)();
router.post("/history", details_controllre_1.createDetails);
router.get("/history", details_controllre_1.getDetails);
router.get("/history/:id", details_controllre_1.getDetailsById);
exports.default = router;
