
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoutes')
const cors = require('cors')

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected to DB :-)"))
.catch((err)=>console.log("Error Connecting to DB :/"))

app.use(routes)


app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

// YV7OfAjv84ji4TZB  shubhamkamboj565
