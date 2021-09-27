"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const availableServices_vontroller_1 = require("../controllers/availableServices.vontroller");
const router = (0, express_1.Router)();
router.post("/availableServices", availableServices_vontroller_1.createAvailableService);
router.get("/availableServices", availableServices_vontroller_1.getAvailableService);
router.get("/availableServices/:id", availableServices_vontroller_1.getAvailableServiceById);
exports.default = router;
