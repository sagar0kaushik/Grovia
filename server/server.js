const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const userRoutes =
require("./routes/userRoutes");

const productRoutes =
require("./routes/productRoutes");

const orderRoutes =
require("./routes/orderRoutes");

const app = express();


// MIDDLEWARES

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);


// HOME ROUTE

app.get("/", (req,res) => {

  res.send("Grovia Backend Running");

});


// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected");

})

.catch((error) => {

  console.log(error);

});


// SERVER

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Server Running On Port ${PORT}`);

});