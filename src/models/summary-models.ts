import mongoose from "mongoose";

interface Summary {
  accountNumber: number;
  income: number;
  spends: number;
  author: any;
}

const createSummary = new mongoose.Schema<Summary>({
  income: { type: Number, required: true },
  accountNumber: { type: Number, required: true },
  spends: { type: Number, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const UserSummary = mongoose.model<Summary>("Summary", createSummary);
export default UserSummary;
