const router = require("express").Router();
const Cart = require("../models/Carts");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//create Cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

//update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

// //delete Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted succefully");
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

// //get Cart
router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userid });

    res.status(200).json(cart);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

//get all carts
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

module.exports = router;
