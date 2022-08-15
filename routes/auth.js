const router = require("express").Router();
const User = require("../models/Users");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//register request
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PSS_SEC
    ).toString(),
  });
  try {
    const saved = await newUser.save();
    res.status(200).json(saved);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json("wrong username");
    }
    const hashPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PSS_SEC
    );
    const inputPassword = hashPassword.toString(CryptoJs.enc.Utf8);
    if (inputPassword !== req.body.password) {
      res.status(401).json("wrong password");
    }

    //jsonwebtoken
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

module.exports = router;
