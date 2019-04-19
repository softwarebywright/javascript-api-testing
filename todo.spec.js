const supertest = require("supertest");
const endpoint = "http://localhost:3000";

describe("/todo", () => {
  describe("GET /", () => {
    it("should return a 200 when requesting todos", async () => {
      await supertest(endpoint)
        .get("/todo")
        .expectStatus(201);
    });
  });
});