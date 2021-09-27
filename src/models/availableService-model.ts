import mongoose from "mongoose";

interface Available {
  wallet: [
    {
      url: string;
      available: true;
    }
  ];
  investment: [
    {
      url: string;
      available: true;
    }
  ];
  taxPayment: [
    {
      url: string;
      available: true;
    }
  ];
  loans: [
    {
      url: string;
      available: true;
    }
  ];

  author: any;
}

const createAvailableServices = new mongoose.Schema<Available>({
  wallet: [
    {
      url: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
  investment: [
    {
      url: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
  taxPayment: [
    {
      url: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
  loans: [
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

const AvailableService = mongoose.model<Available>(
  "AvailableServices",
  createAvailableServices
);
export default AvailableService;
