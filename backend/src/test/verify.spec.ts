import { app, startServer, stopServer } from "../app";
import request from "supertest";

describe("GET /api/users/verify", () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await stopServer();
  });

  const userDetails = {
    client_id: "67b23715220f920008aba3f4",
    document_id: "67b237174709d60008900750",
    live_photo_id: "67b2372738ff550008324f41",
  };

  test("should ceate a check request to verify documents", async () => {
    const response = await request(app)
      .get("/api/users/verify")
      .query(userDetails)
      .expect(200);

    // Check that the token exists
  });
});
