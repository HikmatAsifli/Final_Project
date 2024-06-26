const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const couponRoutes = require("./routes/couponRoutes");
const blogRoutes = require("./routes/blogRoutes");
const orderRoutes = require("./routes/orderRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const { cloudinary, upload } = require("./config/cloudinary");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4404;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
