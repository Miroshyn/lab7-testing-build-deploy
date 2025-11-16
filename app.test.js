const request = require("supertest");
const app = require("./app");

test("GET /api/total correctly returns the sum", async () => {
  const response = await request(app).get("/api/total?a=10&b=15");

  expect(response.statusCode).toBe(200);
  expect(response.body.total).toBe(25);
});

test("GET /api/total works with negative values", async () => {
  const response = await request(app).get("/api/total?a=-5&b=20");

  expect(response.statusCode).toBe(200);
  expect(response.body.total).toBe(15);
});
