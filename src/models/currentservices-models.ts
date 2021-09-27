import mongoose from "mongoose";

interface User {
  currentAccount: [
    {
      url: string;
      available: true;
    }
  ];
  payroll: [
    {
      url: string;
      available: true;
    }
  ];
  payments: [
    {
      url: string;
      available: true;
    }
  ];

  author: any;
}

const createCurrentServices = new mongoose.Schema<User>({
  currentAccount: [
    {
      url: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
  payroll: [
    {
      url: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
  payments: [
    {
      url: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const CurrentService = mongoose.model<User>(
  "CurrentServices",
  createCurrentServices
);
export default CurrentService;
