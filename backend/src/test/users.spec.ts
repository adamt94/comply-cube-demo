import { app, startServer, stopServer } from "../app";
import request from "supertest";

describe("POST /api/users/create", () => {
  const userDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "test@t.com",
  };
  let token = "";

  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await stopServer();
  });

  test("should get token", async () => {
    const response = await request(app)
      .post("/api/users/create")
      .send(userDetails)
      .expect(201);
    token = response.body.token;
    expect(token).toBeDefined();
  });

  test("should return 400 for invalid email", async () => {
    const response = await request(app)
      .post("/api/users/create")
      .send({ ...userDetails, email: "invalid-email" })
      .expect(400);
    expect(response.body.error).toBe("Invalid email format");
  });

  test("should return 400 for missing firstName", async () => {
    const response = await request(app)
      .post("/api/users/create")
      .send({ ...userDetails, firstName: "" })
      .expect(400);
    expect(response.body.error).toBe(
      "Missing required fields: firstName, lastName, or email",
    );
  });
});
