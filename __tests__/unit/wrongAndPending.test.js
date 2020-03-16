const request = require("supertest");

const app = require("../../src/app");

describe("Tests created to fail", () => {
  it("Should never receive a answer", async () => {
    const weight = 85;
    const height = 172;

    const resp = await request(app).get(
      `/imc?weight=${weight}&height=${height}`
    );

    expect(resp.status).toBe(200);
  });

  it.skip("Should never receive a answer", async () => {
    const weight = 85;
    const height = 172;

    const resp = await request(app).get(
      `/imc?weight=${weight}&height=${height}`
    );

    expect(resp.status).toBe(200);
  });
});
