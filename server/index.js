const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRoute");
const enqRouter = require("./routes/enqRoute");
const uploadRouter = require("./routes/uploadRoute");
const couponRouter = require("./routes/couponRoute");
const colorRouter = require("./routes/colorRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan")
require("dotenv").config();
const cors = require("cors")

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);

// not Found
app.use(notFound);
app.use(errorHandler);

// Server runing
require("./config/dbConnect");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
