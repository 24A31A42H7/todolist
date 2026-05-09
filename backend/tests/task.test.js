const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server");

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});

describe("Task API", () => {

  it("should create a task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task" });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Test Task");
  });

  it("should fetch tasks", async () => {
    const res = await request(app).get("/api/tasks");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});