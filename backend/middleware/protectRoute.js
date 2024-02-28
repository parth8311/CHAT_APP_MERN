import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
  } catch (error) {
    console.log("Error In ProtectRoute Middleware:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
