const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

Mongoose.connect("mongodb://localhost:27017/MVC", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);


const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port: " + PORT))