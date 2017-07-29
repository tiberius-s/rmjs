/* eslint-disable no-unused-vars */

// import
const app = require("../server");
const supertest = require("supertest");
const api = supertest(app);

describe("application root endpoint", () => {
  it("should return a message with Hello World", done => {
    return api
      .get("/")
      .set("Accept", "application/json")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("msg");
        expect(res.body).toBe("Hello World!");
      })
      .catch(done);
  });
});
