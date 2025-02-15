//walled/student-wallet-backend/routes/walletRoutes.js
const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Recharge Wallet
router.post("/recharge", async (req, res) => {
    const { studentId, amount } = req.body;

    try {
        const user = await User.findOne({ studentId });
        if (!user) return res.status(404).json({ message: "User not found" });

        user.balance += amount;
        await user.save();

        res.json({ message: "Wallet recharged", newBalance: user.balance });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;


 