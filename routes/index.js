var express = require("express");
var router = express.Router();

const landing = require("../controllers/landing");
const user = require("../controllers/user");

let { isLoggedIn, hasAuth } = require("../middleware/hasAuth");

router.get("/login", user.showLogin);
router.get("/signup", user.showSignup);
router.post("/login", user.login);
router.post("/signup", user.signup);
router.post("/logout", user.logout);
router.get("/logout", user.logout);

/* GET home page. */
router.get("/", landing.getLanding);
router.post("/", landing.submitLead);
router.get("/leads", hasAuth, landing.showLeads);
router.get("/lead/:idLead", hasAuth, landing.showLead);
router.get("/lead/:idLead/edit", hasAuth, landing.showEditLead);
router.post("/lead/:idLead/edit", hasAuth, landing.editLead);
router.post("/lead/:idLead/delete", hasAuth, landing.deleteLead);
router.post("/lead/:idLead/delete-json", hasAuth, landing.deleteLeadJson);

module.exports = router;
