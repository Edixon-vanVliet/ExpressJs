var express = require("express");
var router = express.Router();

const landing = require("../controllers/landing");

/* GET home page. */
router.get("/", landing.getLanding);
router.post("/", landing.submitLead);
router.get("/leads", landing.showLeads);
router.get("/lead/:idLead", landing.showLead);

module.exports = router;
