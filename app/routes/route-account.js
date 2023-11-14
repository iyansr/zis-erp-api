const router = require("express").Router();
const { user } = require("../controllers");
const { authentication } = require("../../config/auth");

router.get("/account", authentication, user.detailUser);
router.get("/notifications", authentication, user.getNotifications);
router.get("/all-users", authentication, user.getAllUser);

module.exports = router;
