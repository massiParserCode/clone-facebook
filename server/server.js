const express = require("express");
const mongodb = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongodb
  .connect(process.env.DATA_BASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected databse Successfuly ..."))
  .catch((err) => console.log("error connecting to mongodb ... ", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listining..  ${PORT}`);
});
