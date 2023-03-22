const UserModels = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

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
    const generatedCrypto = crypto.randomBytes(64).toString('hex');
        const token = jwt.sign({ id: user._id }, generatedCrypto, { expiresIn: '2h' });
        res.json({ token });
    }
}


module.exports = {
    access
}