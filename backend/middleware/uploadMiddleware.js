const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dxqhpfea3",
  api_key: process.env.CLOUDINARY_API_KEY || "136425488693859",
  api_secret: process.env.CLOUDINARY_API_SECRET || "fJLlMGYHPz-e1sKTIOO-QvYD6WM",
});

// Cloudinary storage settings
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png"], // Match your old filter logic
    public_id: (req, file) =>
      Date.now() + "-" + Math.round(Math.random() * 1e9), // Similar unique name logic
  },
});

// File filter (same as your old logic)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, and JPG are allowed."), false);
  }
};

// Multer setup (keep same limits)
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: fileFilter,
});

// Middleware for single file (same as before)
const uploadMiddleware = upload.single("image");

module.exports = uploadMiddleware;
