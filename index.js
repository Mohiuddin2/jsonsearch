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
app.use(express.json())

app.get('/', async(req, res) => {
  // parse json data here...
  let data = {
    "name":{
      'first': 'Daniel',
      'last': 'Smith', 
      'middle': 'N/A', 
      'last': 'Smith'
      },
      'age': 45
    }

  for (let key in data) {
    if (Array.isArray(data[key])) {

        const filtered = data[key].filter(item => item !== 'N/A' && item !== '-' && item !== '');
        data[key] = filtered

    } else if (typeof data[key] === 'object') {

        for (let item in data[key]) {
            if (data[key][item] === 'N/A' || data[key][item] === '-' || data[key][item] === '') {
                delete data[key][item]
            }
        }

    } else {

        if (data[key] === 'N/A' || data[key] === '-' || data[key] === '') {
            delete data[key]
        }

    }
}});



app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
