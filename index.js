const express = require("express");
const userRoutes = require('./routes/userRoutes')

require("dotenv").config()
const connectDatabase = require('./database/database')

connectDatabase()
const app = express();

app.use(express.json())
app.use("/api/users", userRoutes)

const PORT = 5000;
app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`);
});


