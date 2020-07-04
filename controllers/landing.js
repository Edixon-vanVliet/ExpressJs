const models = require("../models");

exports.getLanding = function (req, res, next) {
    res.render("landing", { title: "Express - Landing" });
};

exports.submitLead = function (req, res, next) {
    return models.Lead.create({
        email: req.body.leadEmail,
    }).then((lead) => {
        res.redirect("/");
    });
};
