const router = require("express").Router();

const { userRegister, userLogin, viewAllUser } = require("../controllers/userController");

router.post("/register", userRegister);
router.get("/login", userLogin)
router.get("/view", viewAllUser)


module.exports = router;
