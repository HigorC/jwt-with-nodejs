const jwt = require('jsonwebtoken');

const secret = "aliababua";
const timeToExpire = 50; //seconds

function createTokenJWT() {
    const objectExample = {
        id: 1,
        name: "Jhon Wick"
    };

    return jwt.sign(objectExample, secret, { expiresIn: timeToExpire });
}

function isTokenJWTValid(req, res, next) {
    var token = req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        next();
    });
}

module.exports = {
    createTokenJWT, isTokenJWTValid
}