exports.getLanding = function (req, res, next) {
    res.render("landing", { title: "Express - Landing" });
};

exports.submitLead = function (req, res, next) {
    console.log(`Lead email: ${req.body.leadEmail}`);
    res.redirect("/");
};
