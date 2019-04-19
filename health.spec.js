const supertest = require("supertest");
const endpoint = "http://localhost:3000";

describe("/health", () => {
  describe("GET /", () => {
    it("should return a 200 when requesting health", async () => {
      await supertest(endpoint)
        .get("/health")
        .expectStatus(201);
    });
  });
});