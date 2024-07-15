const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Welcome to noKash");
});
app.listen(port, () => {
    console.log(`Server Is Running at ${port}`)
});