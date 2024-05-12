const router = require("express").Router();
const testController = require("../controllers/test");

router.use("/", require("./swagger"));
router.get("/", testController.helloWorld);
router.use("/laptops", require("./laptops"));
router.use("/phones", require("./phones"));

module.exports = router;
