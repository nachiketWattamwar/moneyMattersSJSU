const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("../backend/db/mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/recentFiveExpenses", (req, res) => {
  const recentData = [
    {
      id: 0,
      date: "16 Mar, 2019",
      name: "Costco Co.",
      paymentMethod: "VISA ⠀•••• 3719",
      amount: 312.44
    },
    {
      id: 1,
      date: "16 Mar, 2019",
      name: "PG&E",
      paymentMethod: "VISA ⠀•••• 2574",
      amount: 866.99
    },
    {
      id: 2,
      date: "16 Mar, 2019",
      name: "Gas",
      paymentMethod: "MC ⠀•••• 1253",
      amount: 100.81
    },
    {
      id: 3,
      date: "16 Mar, 2019",
      name: "Medical Bills",
      paymentMethod: "AMEX ⠀•••• 2000",
      amount: 654.39
    },
    {
      id: 4,
      date: "15 Mar, 2019",
      name: "Pet",
      paymentMethod: "VISA ⠀•••• 5919",
      amount: 212.79
    }
  ];

  res.send(recentData);
});

app.use("/api", (req, res) => {
  res.send("1001");
});

app.post("/deleteExpense", (req, res) => {
  console.log("inside delete backend ", req.body.data);
  res.send("from delete api");
});

app.post("/newExpense", (req, res) => {
  console.log("inside newExpense backend ", req.body);
  res.send("from expense api");
});

app.post("/login", (req, res) => {
  console.log("inside login ", req.body);
  if (req.body.data.email === "admin") {
    console.log("inside if");
    res.send("true");
  }
  res.send("false");
});

app.post("/signup", (req, res) => {
  console.log("inside signup backend ", req.body);
  res.send("from sgnup api");
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
