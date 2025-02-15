//walled/student-wallet-backend/models/Wallet.js

const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, default: 0 },
  transactions: [{ amount: Number, date: Date, description: String }],
  qrDisabled: { type: Boolean, default: false }
});

module.exports = mongoose.model("Wallet", WalletSchema);
