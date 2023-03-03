const UserModels = require("../models");
const MongoClient = require('mongodb').MongoClient;
const URI = "mongodb://localhost:27017/sistema-de-login";

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
};

async function getTestEmail(req, res){
    const { email } = req.params

    const emailTest = email ? { email } : null
    //const passTest = password ? { password } : null
    
    
    const tryUserEmail = await UserModels.find(emailTest);
    //const tryUserPass = await UserModels.find(passTest);
    if(tryUserEmail.length > 0){
        return res.send(tryUserEmail);
    } else {
        res.sendStatus(404);
    }
}

module.exports = {
    post,
    getTestEmail,
}