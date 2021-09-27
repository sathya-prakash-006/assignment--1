import mongoose from "mongoose";

// Create USER model

interface User {
  fullname: string;
  date: string;
  email: string;
  password: string;
  confirmpassword: string;
  createdAt: any;
  
}

const createAccount = new mongoose.Schema<User>({
  fullname: { type: String, required: true },
  date: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  confirmpassword: { type: String },
});

const UserModel = mongoose.model<User>("User", createAccount);
export default UserModel;
