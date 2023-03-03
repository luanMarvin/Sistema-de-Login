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
    console.log(req.params)
    const { email } = req.params

    const emailTest = email ? { email } : null
    //const passTest = password ? { password } : null
    
    
    const tryUserEmail = await UserModels.find(emailTest);
    //const tryUserPass = await UserModels.find(passTest);
    if(tryUserEmail){
        console.log(tryUserEmail)
        return res.send(tryUserEmail);
    } else {
        return false;
    }
}

module.exports = {
    post,
    getTestEmail,
}