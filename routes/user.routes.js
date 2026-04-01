const express = require("express");
const {createUser, getUsers} = require("../controllers/user.controller")

// router

const router = express.Router();

// apis
router.post("/create-user", createUser)

router.get("/get-users", getUsers)

module.exports = router