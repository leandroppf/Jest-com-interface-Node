const request = require("supertest");

const app = require("../../src/app");

describe("Arithmetic Multiply", () => {
  it("Should fail for passing incorrect params", async () => {
    const x = 2;
    const y = 5;

    const resp = await request(app).get(`/multiply?first=${x}&second=${y}`);

    expect(resp.status).toBe(400);
  });

  it("Should multiply two numbers", async () => {
    const x = 2;
    const y = 5;

    const resp = await request(app).get(`/multiply?value1=${x}&value2=${y}`);

    expect(resp.body.result).toBe(10);
  });
});
