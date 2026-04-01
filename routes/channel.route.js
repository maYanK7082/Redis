const express = require("express");
const {createChannel, getAccountDetails, getAllDetails} = require("../controllers/channel.controller");

const router = express.Router();

router.post("/create-channel", createChannel)

router.get("/get-account-details", getAccountDetails);

router.get("/get-all-details/:userId", getAllDetails);


module.exports = router