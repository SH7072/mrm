require('dotenv').config({
    path: "./config/config.env",
});
const mongoose = require('mongoose');
const user = require("./routes/userRoutes");
const express = require("express");
const app = express();
const cors = require("cors");
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");




app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }, { limit: '50mb' }));
app.use(
    cors({
        origin: "*",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected with ${connection.host}`);
};

connectDB();


app.use("/user", user);

app.get("/", (req, res) =>
    res.send(
        'Hi'
    )
);


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});