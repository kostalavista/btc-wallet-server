const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use("/api", require("./api"));

app.listen(process.env.PORT || 8080, () => console.log("server started :8080"));