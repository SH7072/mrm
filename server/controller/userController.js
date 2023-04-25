const User = require("../models/User");

exports.formSubmit = async (req, res, next) => {
    try {
        const { name, email, uri } = req.body;
        const user = await User.create({
            name,
            email,
            uri,
        });
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
}

