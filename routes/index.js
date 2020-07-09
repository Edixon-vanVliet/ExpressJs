var express = require("express");
var router = express.Router();

const landing = require("../controllers/landing");

/* GET home page. */
router.get("/", landing.getLanding);
router.post("/", landing.submitLead);
router.get("/leads", landing.showLeads);
router.get("/lead/:idLead", landing.showLead);
router.get("/lead/:idLead/edit", landing.showEditLead);
router.post("/lead/:idLead/edit", landing.editLead);
router.post("/lead/:idLead/delete", landing.deleteLead);
router.post("/lead/:idLead/delete-json", landing.deleteLeadJson);

module.exports = router;
