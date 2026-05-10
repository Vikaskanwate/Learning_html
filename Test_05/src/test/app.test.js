const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index"); 
const User = require("../model/user"); 


  // Clean DB before each test
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    // Close DB connection
    await mongoose.connection.close();
  });
describe("User API", () => {

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ userName: "Arun", password: "secret123" });

    expect(res.statusCode).toBe(201);
    expect(res.body.userName).toBe("Arun");

    const userInDb = await User.findOne({ userName: "Arun" });
    expect(userInDb).not.toBeNull();
  });

  it("should get a user by id", async () => {
    const user = await User.create({ userName: "Arun", password: "secret123" });

    const res = await request(app).get(`/users/${user._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.userName).toBe("Arun");
  });

  it("should update a user", async () => {
    const user = await User.create({ userName: "Arun", password: "secret123" });

    const res = await request(app)
      .put(`/users/${user._id}`)
      .send({ userName: "ArunUpdated" });

    expect(res.statusCode).toBe(200);
    expect(res.body.userName).toBe("ArunUpdated");

    const updatedUser = await User.findById(user._id);
    expect(updatedUser.userName).toBe("ArunUpdated");
  });

  it("should delete a user", async () => {
    const user = await User.create({ userName: "Arun", password: "secret123" });

    const res = await request(app).delete(`/users/${user._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User deleted");

    const deletedUser = await User.findById(user._id);
    expect(deletedUser).toBeNull();
  });

  it("should fail to create user with missing fields", async () => {
    const res = await request(app)
      .post("/users")
      .send({ userName: "Arun" }); // missing password

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("missing fields");
  });
});
