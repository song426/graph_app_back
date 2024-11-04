const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World node Test");
});

app.use(require("./routes/salesMapRoute"));
app.use(require("./routes/visitorsRoute"));
app.use(require("./routes/customersRute"));
app.use(require("./routes/revenueRoute"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
