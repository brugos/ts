import { assert } from "chai";
import supertest from "supertest";
import { app } from "./index";

// simple tests to demonstrate the idea of
// unit testing routers individually.
describe("App", () => {
  it("Customers", async () => {
    const res = await supertest(app).get("/customers");
    console.log("### res.status", res.status);
    assert.equal(res.status, 200);
  });
});
