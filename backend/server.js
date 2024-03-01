import express from "express";

import cookieParser from "cookie-parser";

import dotenv from "dotenv";

import authRoutes from "../backend/routes/auth.routes.js";
import messageRoutes from "../backend/routes/message.routes.js";
import userRoutes from "../backend/routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/",(req,res) => {
//   res.send('Hello World')
// })

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running On Port ${PORT}`);
});