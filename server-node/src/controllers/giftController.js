import Gift from "../models/Gift.js";
import cloudinary from "../utils/cloudinary.js";

export const getGifts = async (req, res) => {
  try {
    const users = await Gift.find();
    res.json(gifts);
  } catch (error) {
    console.log(error);
  }
};

export const addGift = async (req, res) => {
  console.log(req.body);

  try {

    const result = await cloudinary.v2.uploader.upload(req.file.path);
    // Upload image to cloudinary
    console.log(req.file.path)
    // Create instance of User
    const gift = new Gift({
      name: req.body.firstName,
      cloudinaryId: result.public_id,
      cloudinaryUrl: result.secure_url,
      firebaseUser: req.body.firebaseUser,
    });

    await gift.save();
    res.status(200).json({ data: "Gift created", gift });
  } catch (error) {
    console.log(error);
  }
};