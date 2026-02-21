import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/user", userRoutes); 

connectDB();

app.get("/",(req,res)=>{
    res.send("Backend Server chal raha ha")
})

app.listen(5050, () => {
    console.log("Server running on port 5050");
});