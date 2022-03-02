const express = require("express");
const app = express();
const connectDB = require("./config/db");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");

dotenv.config({ path: "./config/.env" });
// Connect DB
// connectDB();
// app.use('/users', userRoute)
const https = require('https');


const data = [
  {
    id: 101,
    name: "product x",
    price: 100,
    status: "InActive",
  },
  {
    id: 105,
    name: "product x",
    price: 100,
    status: "Inactive",
  },
];
app.get("/external-service.com/products/:id/page/:pgnum", (req, res) => {
  const filterActive = data.find((item) => {
    return item.status == "Active"
  });
  // console.log(filterActive)
  if(filterActive == null){
    res.json({data: [], page: 1, total_pages: 1})
  } else {
    res.send(filterActive)
  }
})
// app.get("/external-service.com/products/:id/page/:pgnum", (req, res) => {
//   const filterActive = data.filter((item) => {
//     return item.status == "active"
//   });
//   console.log(filterActive)
//   if(filterActive == null){
//     res.json({data: [], page: 1, total_pages: 1})
//   } else {
//     res.send(filterActive)
//   }
// })

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5000;
app.listen(3000, () => {
  console.log(`Server is running on Port ${port}`);
});
