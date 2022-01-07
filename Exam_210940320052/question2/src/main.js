const express = require("express");
const app = express();
app.use(express.json());
const { addMsg, getMsg } = require("./user.js")

const cors = require("cors");
app.use(cors());

app.get("/msg", async (req, res) => {
    const list = await getMsg();
    res.json(list);

});

app.post("/add-msg", async (req, res) => {
    let data = req.body;
    await addMsg(data);
    res.json({ message: "added successfully" });

});

app.listen(4000);

