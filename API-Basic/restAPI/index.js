const express = require("express");
const router = express.Router();

const isAuth = require("../middlewares/auth-control");
const testEndpointAccess = require("../middlewares/test-endpoint-access");

const serverCheck = require("./home/serverCheck");
const login = require("./auth/login");
const register = require("./auth/register");
const authControl = require("./authControl");
const testEmail = require("./testEmail");

router.get("/", serverCheck);
router.post("/login", login);
router.post("/register", register);
router.get("/authControl", testEndpointAccess, isAuth, authControl);
router.get("/testEmail", testEmail);

module.exports = router;
