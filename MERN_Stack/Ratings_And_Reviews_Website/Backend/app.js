const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express()

app.use(express.json());
dotenv.config();
app.use(cors());

dotenv.config();

const uri = process.env.mongoURI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then(()=>{console.log("MongoDB Database Connection Established Successfully");})
.catch((err)=>{console.log(err)});

// Routers

// Admins Router

const adminsRouter = require("./Routes/adminsRoutes");

app.use("/admins", adminsRouter);

// Users Router

const usersRouter = require("./Routes/usersRoutes");

app.use("/users", usersRouter);

// Categories Router

const categoriesRouter = require("./Routes/categoriesRoutes");

app.use("/categories", categoriesRouter);

// SubCategories Router

const subCategoriesRouter = require("./Routes/subCategoriesRoutes");

app.use("/subcategories", subCategoriesRouter);

// SubSubCategories Router

const subSubCategoriesRouter = require("./Routes/subSubCategoriesRoutes");

app.use("/subsubcategories", subSubCategoriesRouter);

// Products Router

const productsRouter = require("./Routes/productsRoutes");

app.use("/products", productsRouter);

// Reviews Router

const ratingsRouter = require("./Routes/ratingsRoutes");

app.use("/ratings", ratingsRouter);

// Reviews Router

const reviewsRouter = require("./Routes/reviewsRoutes");

app.use("/reviews", reviewsRouter);


module.exports = app;