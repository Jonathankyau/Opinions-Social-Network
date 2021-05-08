const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
<<<<<<< HEAD
  api_secret: process.env.API_SECRET
=======
  api_secret: process.env.API_SECRET,
>>>>>>> a18241bee3149e1ed483196324d2318e7d6c861f
});

module.exports = cloudinary;
