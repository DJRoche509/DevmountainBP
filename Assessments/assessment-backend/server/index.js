const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, submitHandler, getSections, deleteSection} = require('./controller')

// const sections = []; // Define the sections array here

app.get("/api/myApp/compliment", getCompliment);
app.get("/api/myApp/fortune", getFortune);
app.get('/api/myApp/sections', getSections)
app.post('/api/myApp/sections', submitHandler);
app.delete('/api/myApp/sections/:id', deleteSection);

app.listen(4000, () => console.log("Server running on 4000"));
