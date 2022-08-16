const router = require("express").Router();
const Order = require("../models/Orders");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//create order
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

//update order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

//delete order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted succefully");
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

// //get Order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });

    res.status(200).json(orders);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

//get all order
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

//get last incoms
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  // const productId = req.query._id;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const incoms = await Order.aggregate([
      {
        $match: { createdAt: { $gte: "prevMonth" } },
      },
      { $project: { month: { $month: "$createdAt" }, salse: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    res.status(200).json(incoms);
  } catch {
    (err) => {
      res.status(500).json(err);
    };
  }
});

module.exports = router;
