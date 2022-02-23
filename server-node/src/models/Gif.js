import pkg from "mongoose";
const { Schema, model } = pkg;

const GifSchema = new Schema(
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
    },
    genre: {
      type: String,
  }
});

export default model("gif", GifSchema);