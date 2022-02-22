import pkg from "mongoose";
const { Schema, model } = pkg;

const GiftSchema = new Schema(
  {
    name: {
      type: String,
    },
    firebaseUser: {
      type: String,
    },
    cloudinaryId: {
      type: String,
    },
    cloudinaryUrl: {
      type: String,
    }
  }
);

export default model("gift", GiftSchema);