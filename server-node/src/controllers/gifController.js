import Gif from "../models/Gif.js";
import cloudinary from "../utils/cloudinary.js";

export const getGifs = async (req, res) => {
  try {
    const gif = await Gif.find();
    res.json(gif);
  } catch (error) {
    console.log(error);
  }
};

export const getPetGifs = async (req, res) => {
  try {
    const gif = await Gif.find({
      genre: pets,
    });
    res.json(gif);
  } catch (error) {
    console.log(error);
  }
};

export const getSportGifs = async (req, res) => {
  try {
    const gif = await Gif.find({
      genre: sport,
    });
    res.json(gif);
  } catch (error) {
    console.log(error);
  }
};

export const getCartoonGifs = async (req, res) => {
  try {
    const gif = await Gif.find({
      genre: cartoon,
    });
    res.json(gif);
  } catch (error) {
    console.log(error);
  }
};

export const getGamingGifs = async (req, res) => {
  try {
    const gif = await Gif.find({
      genre: gaming,
    });
    res.json(gif);
  } catch (error) {
    console.log(error);
  }
};

export const addGif = async (req, res) => {
  console.log(req.body);

  try {

    const result = await cloudinary.v2.uploader.upload(req.file.path);
    // Upload image to cloudinary
    console.log(req.file.path)
    // Create instance of User
    const gif = new Gif({
      name: req.body.firstName,
      cloudinaryId: result.public_id,
      cloudinaryUrl: result.secure_url,
      firebaseUser: req.body.firebaseUser,
    });

    await gif.save();
    res.status(200).json({ data: "Gif created", gif });
  } catch (error) {
    console.log(error);
  }
};