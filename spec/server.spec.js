const request = require("request");
const base_url = "http://localhost:3000"

var server = require("../server");

describe("Test of server.js", function () {
    describe("GET /itWorks", function () {
        it("Deve retornar 200 como status code", (done) => {
            request.get(`${base_url}/itworks`, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            })
        })
    })
})