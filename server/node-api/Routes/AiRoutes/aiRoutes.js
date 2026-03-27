const express = require("express");
const { userchatHandler } = require('../../Controllers/AIchatcontroller.js');
const aiAuth = require("../../Middlewares/aiAuth.js");

const ai_router = express.Router();

ai_router.post('/ai-chat/', aiAuth, userchatHandler);

module.exports = ai_router;