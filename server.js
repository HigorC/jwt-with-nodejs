const express = require("express");
const app = express();

const jwtManager = require("./jwt-manager");

const port = 3000;

app.get("/itWorks", (req, res) => {
    res.send("Yes, it works!");
})

app.get("/createTokenJwt", (req, res) => {
    let token = jwtManager.createTokenJWT();
    res.status(200).send({ auth: true, token });
})

app.get("/itWorksWithToken", jwtManager.isTokenJWTValid, (req, res, next) => {
    res.send("Yes, it works with token JWT!");
})

let server = app.listen(port, () => {
    console.log(`>> A todo vapor na porta ${port}`);
})

exports.closeServer = function(){
    server.close();
  };