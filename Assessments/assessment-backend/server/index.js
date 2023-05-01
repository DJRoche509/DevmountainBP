const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

const {getFortune} = require('./controller')

const {submitHandler} = require('./controller')

app.get("/api/myApp/compliment", getCompliment);
app.get("/api/myApp/fortune", getFortune);
app.post('/api/myApp/sections', submitHandler);

app.listen(4000, () => console.log("Server running on 4000"));
