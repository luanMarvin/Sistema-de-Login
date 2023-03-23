const UserModels = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generatedCrypto = crypto.randomBytes(64).toString('hex');

async function access(req, res){
    const { email, password } = req.body;
    const user = await UserModels.findOne({ email });

    if(user){
        validatedPass = await bcrypt.compare(password, user.password);
    } else {
        return res.status(404).send('User not found');
    }

    if(!validatedPass){
        return res.status(401).send('Invalid credentials');
    }

    if(user && validatedPass){
        const token = jwt.sign({ id: user._id }, generatedCrypto, { expiresIn: '2h' });
        res.json(token);
    }
}

async function auth(req, res){
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = jwt.verify(token, generatedCrypto);
    const user = await UserModels.findOne({ _id: id });
    let data = { firstName: user.firstName, surName: user.surName, email: user.email };
    res.json(data);
}

module.exports = {
    access,
    auth
}