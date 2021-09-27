import mongoose from "mongoose";

interface Available {
  wallet: [
    {
      url: string;
      available: boolean;
    }
  ];
  investment: [
    {
      url: string;
      available: boolean;
    }
  ];
  taxPayment: [
    {
      url: string;
      available: boolean;
    }
  ];
  loans: [
    {
      url: string;
      available: boolean;
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
