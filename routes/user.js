const express = require("express");

const router = express.Router();

const {
  createAccount,
  login,
  profile,
  updateProfile,
  updatePassword,
} = require("../controllers/user");
const auth = require("../middlewares/auth");

router.route("/register").post(auth, createAccount);
router.route("/login").post(login);
router.route("/profile").get(auth, profile);
router.route("/profile/update").put(auth, updateProfile);

router.route("/profile/password/update").put(auth, updatePassword);

module.exports = router;
