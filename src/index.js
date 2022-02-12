require('dotenv').config({path: './config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const categoryRoute = require("./routes/categoryRoute");
const memberRoute = require("./routes/memberRoute");
const staffRoute = require("./routes/staffRoute");
const bookRoute = require("./routes/bookRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./db")(app);

app.use("/category", categoryRoute);
app.use("/member", memberRoute);
app.use("/book", bookRoute);
app.use("/staff", staffRoute);

app.get("/",(req, res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log("App is running on port : "+port);
})