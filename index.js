const express = require("express");
const app = express();
// const connectDB = require("./config/db");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const userRoute = require("./routes/users");

// dotenv.config({ path: "./config/.env" });
// Connect DB
// connectDB();
// app.use('/users', userRoute)


app.get('/', async(req, res) => {
  
  let data = '';

  // parse json data here...
  let jsondata = {
    "name":{
      'first': 'Daniel',
      'last': 'Smith', 
      'middle': 'N/A', 
      'last': 'Smith'
      },
      'age': 45
  }
  
  const obj =
  Object.keys(jsondata).forEach(function(key){
    if (jsondata.name.key === 'N/A') {
      delete jsondata[key];
    }
  });


 console.log(Object[key])
  // delete jsondata.name.


  // console.log(res);

  res.send(jsondata.name.middle)

});



app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
