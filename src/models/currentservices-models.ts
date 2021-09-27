import mongoose from "mongoose";

interface Current {
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

const createCurrentServices = new mongoose.Schema<Current>({
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

const CurrentService = mongoose.model<Current>(
  "CurrentServices",
  createCurrentServices
);
export default CurrentService;
