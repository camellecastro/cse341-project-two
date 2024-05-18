const router = require("express").Router();
const passport = require("passport");
const testController = require("../controllers/test");

router.use("/", require("./swagger"));
// router.get("/", testController.helloWorld);
router.use("/laptops", require("./laptops"));
router.use("/phones", require("./phones"));

router.get("/login", passport.authenticate("github"), (req, res) => { });

router.get("/logout", function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

module.exports = router;
