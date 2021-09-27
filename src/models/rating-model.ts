import mongoose from "mongoose";

interface Rating {
  rating: number;
  author: any;
}

const createRating = new mongoose.Schema<Rating>({
  rating: { type: Number, required: true },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const UserRating = mongoose.model<Rating>("Rating", createRating);
export default UserRating;
