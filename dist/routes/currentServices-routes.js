"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currentservices_controller_1 = require("../controllers/currentservices-controller");
const router = (0, express_1.Router)();
router.post("/currentServices", currentservices_controller_1.createCurrentService);
router.get("/currentServices", currentservices_controller_1.getCurrentService);
router.get("/currentServices/:id", currentservices_controller_1.getCurrentServiceById);
exports.default = router;
