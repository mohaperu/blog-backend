require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes =  require("./routes/users");
const authRoutes = require("./routes/auth");
const hi = require('./routes/hi');
const post = require('./routes/post');
const getpost = require('./routes/getpost');


//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use('/api/hi',hi);
app.use('/api/post',post);
app.use('/api/allpost',getpost);

const port = process.env.PORT || 8080;
app.listen(port,() => console.log(`Listening on port ${port}...`));