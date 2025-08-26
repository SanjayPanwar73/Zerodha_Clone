require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");


const authRoute = require("./routes/AuthRoute");
const userVerification = require("./middlewares/AuthMiddleware.js");

console.log(typeof userVerification);
console.log(typeof authRoute);
// const PORT = 3001;
const URL = process.env.MONGO_URL;
const app = express();
const PORT = process.env.PORT || 3001;



mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: [
    "https://zerodha-clone-frontend-clmm.onrender.com",
  "https://zerodha-clone-fnnn.onrender.com",
  "https://zerodha-clone-dashboard-1388.onrender.com"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api", (req, res, next) => {
  console.log("API Route Hit:", req.method, req.url);
  next();
});
app.use("/api", authRoute);

app.get("/cookie-test", (req, res) => {
  res.cookie("token", "test-value", {
    httpOnly: true,
    secure: true,
    sameSite: "None"
  });
  res.json({ message: "Cookie sent" });
});

app.post("/api/verify-user", userVerification.userVerification, (req, res) => {
  return res.json({
      status: true,
      username: req.user.username
    });
});

app.get("/allholdings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allorders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
});

app.post("/sellOrder", async (req, res) => {
  let selledOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  selledOrder.save();
});
app.get("/getStock/:uid", async (req, res) => {
  const uid = req.params.uid;

  const stock = await OrdersModel.findOne({ name: uid });
  if (!stock) {
    return res.status(404).json({ message: "Stock not found" });
  }
  res.json(stock);
});  

app.get("/", (req, res) => {
  res.send("Welcome to Zerodha Clone Backend");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App Started on PORT ${PORT}`);
});


