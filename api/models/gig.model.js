import { Schema } from "mongoose";

const gigSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: [true, "Lütfen title'ı tanımlayın"],
    },
    title: {
      type: String,
      required: [true, "Lütfen title'ı tanımlayın"],
    },
    desc: {
      type: String,
      required: [true, "Lütfen title'ı tanımlayın"],
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    starCount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Lütfen category'i tanımlayın"],
    },
    cover: {
      type: String,
      required: [true, "Lütfen cover'ı tanımlayın"],
    },
    images: {
      type: [String],
    },
    shortTitle: {
      type: String,
      required: [true, "Lütfen shortTitle'ı tanımlayın"],
    },
    shortDesc: {
      type: String,
      required: [true, "Lütfen shortDesc'i tanımlayın"],
    },
    deliveryTime: {
      type: Number,
      required: [true, "Lütfen deliveryTime'ı tanımlayın"],
    },
    revisionNumber: {
      type: Number,
      required: [true, "Lütfen revisionNumber'ı tanımlayın"],
    },
    features: {
      type: [String],
    },
    sales: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Lütfen price'ı tanımlayın"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Gig", gigSchema);
