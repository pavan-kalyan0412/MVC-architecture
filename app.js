const express = require('express');
const { mongoose } = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

// Serve static HTML files from the 'public' directory
app.use(express.static('public'));

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.get('/login', (req,res) =>{
    res.sendFile(__dirname + '/public/login.html')
});

mongoose.connect("mongodb://localhost:27017/MVC")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

const authRoutes = require('./routes/authRoutes');
app.use('/mvc', authRoutes);


const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port: " + PORT))