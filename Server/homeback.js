const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config()

const { postKayak, deleteKayak } = require("./controller");

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/home.html'))
})

app.get ('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/home.css'))
})

app.get ('/styles2', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/list.css'))
})

app.get ('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/homefront.js'))
})

app.get ('/js2', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/listfront.css'))
})



app.post("/kayak", postKayak)

app.delete(`/kayak/:id`, deleteKayak)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log("Server runnning on port 4000"))