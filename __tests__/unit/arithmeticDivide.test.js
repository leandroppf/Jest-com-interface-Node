const request = require("supertest");

const app = require("../../src/app");

describe("Arithmetic Divide", () => {
  it("Should fail for passing incorrect params", async () => {
    const x = 9;
    const y = 3;

    const resp = await request(app).get(`/divide?first=${x}&second=${y}`);

    expect(resp.status).toBe(400);
  });

  it("Should divide two numbers", async () => {
    const x = 9;
    const y = 3;

    const resp = await request(app).get(`/divide?value1=${x}&value2=${y}`);

    expect(resp.body.result).toBe(3);
  });
});
