const UserModels = require("../models");

//Post Functions
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


//Get Functions
async function getTestEmail(req, res){
    const { email } = req.params
    const emailTest = email ? { email } : null
    
    const tryUserEmail = await UserModels.find(emailTest);
    if(tryUserEmail.length == 0){
        res.send(true);
    } else {
        res.send(false);
    }
}

module.exports = {
    post,
    getTestEmail,
}