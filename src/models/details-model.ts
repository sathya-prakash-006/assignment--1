import mongoose from "mongoose";

interface Details {
  transactionId: number;
  date: string;
  amount: number;
  status: string;
  action: string;
  author: any
}

const createDetails = new mongoose.Schema<Details>({
  transactionId: { type: Number, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  action: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const UserDetails = mongoose.model<Details>("Details", createDetails);
export default UserDetails;
