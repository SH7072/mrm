require('dotenv').config({
    path: "./config/config.env",
});
const mongoose = require('mongoose');
const user = require("./routes/userRoutes");
const express = require("express");
const app = express();
const cors = require("cors");
// const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const { apiDoc } = require('./utils/docs');
const morgan = require('morgan');
const path = require('path')
const rfs = require('rotating-file-stream') // version 2.x


app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }, { limit: '50mb' }));
app.use(
    cors({
        origin: "*",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
    interval: '1hr', // rotate daily
    path: path.join(__dirname, 'log')
})


// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

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