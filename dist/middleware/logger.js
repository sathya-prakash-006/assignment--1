"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Error handling Middleware
const logger = (err, req, res, next) => {
    res.status(500).json({ message: err.message });
};
exports.default = logger;
