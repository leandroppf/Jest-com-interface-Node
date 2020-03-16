const request = require("supertest");

const app = require("../../src/app");

describe("Arithmetic Sum", () => {
  it("Should fail for passing incorrect params", async () => {
    const x = 2;
    const y = 4;

    const resp = await request(app).get(`/sum?first=${x}&second=${y}`);

    expect(resp.status).toBe(400);
  });

  it("Should sum two numbers", async () => {
    const x = 2;
    const y = 4;

    const resp = await request(app).get(`/sum?value1=${x}&value2=${y}`);

    expect(resp.body.result).toBe(6);
  });
});
