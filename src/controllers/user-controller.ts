import { RequestHandler } from "express";
import UserModel from "../models/user-model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

const secret = "test";

// SIGN IN

export const signin: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    //checking user is already exist or not
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    // comparing entered password and the password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });

    // If password and email proper then creating jwt token for frontend
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error: any) {
    res.status(500).json({ message: "something went wrong" });
  }
};
/************************************************************************************************************* */

// CREATE NEW ACCOUNT

export const signup: RequestHandler = async (req, res) => {
  const { fullname, date, email, password, confirmpassword } = req.body;

  try {
    //error validation

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    // checking user is already exist or not
    const oldUser = await UserModel.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    // if the password and confirm password matching or not
    if (password !== confirmpassword)
      return res.status(404).json({ message: "Password don't match." });

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      email,
      date,
      password: hashedPassword,
      fullname: fullname,
    });

    // creating jwt token
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/************************************************************************************************************* */
