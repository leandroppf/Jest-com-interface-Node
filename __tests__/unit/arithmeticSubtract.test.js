const request = require("supertest");

const app = require("../../src/app");

describe("Arithmetic Subtract", () => {
  it("Should fail for passing incorrect params", async () => {
    const x = 5;
    const y = 3;

    const resp = await request(app).get(`/subtract?first=${x}&second=${y}`);

    expect(resp.status).toBe(400);
  });

  it("Should subtract two numbers", async () => {
    const x = 5;
    const y = 3;

    const resp = await request(app).get(`/subtract?value1=${x}&value2=${y}`);

    expect(resp.body.result).toBe(2);
  });
});
