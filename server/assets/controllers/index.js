const UserModels = require("../models");

async function post(req, res){
    const {
        firstName,
        surName,
        email,
        password
    } = req.body

    const register = new UserModels({
        firstName,
        surName,
        email,
        password
    });

    register.save();
    res.send(register);
}

module.exports = {
    post
}