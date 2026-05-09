const request = require("supertest");
const app = require("../index");

describe("CRUD Operations", () => {

  // CREATE
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Ravi", age: 30 });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Ravi");
  });

  // READ (all)
  it("should fetch all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // READ (by ID)
  it("should fetch a user by ID", async () => {
    const res = await request(app).get("/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  // UPDATE
  it("should update an existing user", async () => {
    const res = await request(app)
      .put("/users/1")
      .send({ name: "Updated Arun" });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Updated Arun");
  });

  // DELETE
  it("should delete a user", async () => {
    const res = await request(app).delete("/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User deleted");
  });

});
