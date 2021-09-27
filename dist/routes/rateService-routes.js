"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rating_controller_1 = require("../controllers/rating-controller");
const router = (0, express_1.Router)();
router.post("/rating", rating_controller_1.createRating);
router.get("/rating", rating_controller_1.getRating);
router.get("/rating/:id", rating_controller_1.getRatingById);
exports.default = router;
