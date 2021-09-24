import { RequestHandler } from "express";
import UserModel from "../models/createAccount-model";

export const createAccount: RequestHandler = async (req, res, next) => {
  // if password and enterred password is incorrect returning
  if (req.body.password !== req.body.confirmpassword) {
    return res.status(404).send("Password and confirm password not matching");
  }

  // checking email is already exist or not
  UserModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(404).send("user already exist");
    }
  });

  const user = await UserModel.create(req.body);
  res.status(201).json({ data: user });
};

// Login user

export const loginAccount: RequestHandler = (req, res, next) => {
  UserModel.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .then((user: any) => {
      if (
        user.email === req.body.email &&
        user.password === req.body.password
      ) {
        return res.status(202).send({
          message: "Succesfully logged in",
          token: Math.random() * 100000000,
        });
      }
    })
    .catch((err: any) => {
      return res.status(400).json("username or password in incorrect");
    });
};

//export const createBankservice: RequestHandler = (req, res, next) => {};

// export const createAccount: RequestHandler = async (req, res) => {
//   const { fullname, date, email, password, confirmpassword } = req.body;

//   const newUser = new UserModel({
//     fullname,
//     date,
//     email,
//     password,
//     confirmpassword,
//   });
//   try {
//     if (password === confirmpassword) {
//       await newUser.save();
//     }

//     res.status(201).json(newUser);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };
