let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require("passport");
const myPassport = require("../passport_setup")(passport);
let flash = require("connect-flash");

const { isEmpty } = require("lodash");
const { validateUser } = require("../validators/signup");

exports.showLogin = function (req, res, next) {
    res.render("user/login", { formData: {}, errors: {} });
};

exports.showSignup = function (req, res, next) {
    res.render("user/signup", { formData: {}, errors: {} });
};

const rerenderSignup = function (errors, req, res, next) {
    res.render("user/signup", { formData: req.body, errors: errors });
};

exports.login = function (req, res, next) {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
    })(req, res, next);
};

const generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

exports.signup = function (req, res, next) {
    let errors = {};
    return validateUser(errors, req).then((errors) => {
        if (!isEmpty(errors)) {
            rerenderSignup(errors, req, res, next);
        } else {
            const newUser = models.User.build({
                email: req.body.email,
                password: generateHash(req.body.password),
            });

            return newUser.save().then((result) => {
                passport.authenticate("local", {
                    successRedirect: "/",
                    failureRedirect: "/signup",
                    failureFlash: true,
                })(req, res, next);
            });
        }
    });
};

exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect("/");
};
