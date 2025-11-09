require("dotenv").config();
const express = require ("express");
const app = express();
const mongoose = require ("mongoose");

const PORT =  process.env.PORT  || 8000;
const url = process.env.MONGO_URL;
main().catch(err => console.log(err));
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));
app.use(bodyParser.json());
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const {UserModel} = require("./model/UserModel");

async function main() {
    await mongoose.connect(url);
}
// app.get("/addData",(req,res)=>{
//     let tempData = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ]
// tempData.forEach((item)=>{
//     let newHolding = new HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day
//     })
//     newHolding.save();
// });
// res.send("done");
// })
// app.get("/add",(req,res)=>{
//     let tempData = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
// tempData.forEach((item)=>{
//     let newPosition = new PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss
//     })
//     newPosition.save();
// })
// res.send("done")
// })
app.get("/allHoldings", async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch holdings" });
    }
});

app.get("/allposition",async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})
app.post("/newOrder",async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order saved");
})
app.get("/allorders",async (req,res)=>{
    let allorders = await OrdersModel.find({});
    res.json(allorders);
})
app.get("/adduser", async (req, res) => {
  try {
    const newUser = new UserModel({
      name: "ashirbada",
      email: "asd@gmail.com",
      password: "123",
      role: "Admin"
    });

    await newUser.save();
    res.send("User added successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding user");
  }
});

app.post("/newSellOrder", async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    // 1️⃣ Check if user has already bought the stock
    const existingBuy = await OrdersModel.findOne({ name, mode: "BUY" });

    if (!existingBuy) {
      // ❌ No buy found — can’t sell
      return res.status(400).send("You cannot sell a stock you haven't bought.");
    }

    // 2️⃣ If buy found — allow sell
    const newSell = new OrdersModel({
      name,
      qty,
      price,
      mode: "SELL",
    });

    await newSell.save();
    res.send("Sell order saved successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error placing sell order.");
  }
});
app.post("/api/login",async (req,res)=>{
   const { email, password } = req.body;
   
   try {
    const user = await UserModel.findOne({ email, password }); // simple check
    
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      name: user.name,
      role: user.role
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
})

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new UserModel({
      name,
      email,
      password, // In production, hash this password
      role: "User" // Default role
    });

    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
})

app.listen(PORT,()=>{
    console.log("app.is listening");
})