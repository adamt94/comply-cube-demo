import { ComplyCube } from "@complycube/api";

const complycube = new ComplyCube({ apiKey: process.env.COMPLY_CUBE_API_KEY });

export class ComplyCubeService {
  static async createIdentityCheck(
    clientId: string,
    documentId: string,
    livePhotoId: string,
  ) {
    try {
      return await complycube.check.create(clientId, {
        livePhotoId,
        documentId,
        type: "identity_check",
      });
    } catch (error) {
      console.error("Error in identity verification:", error);
      throw error; // The caller (route handler) will handle the error
    }
  }

  static async createUser(
    firstName: string,
    lastName: string,
    email: string,
  ) {
    try {
      const client = await complycube.client.create({
        type: "person",
        email,
        personDetails: { firstName, lastName },
      });

      return client;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  static async generateToken(clientId: string) {
    try {
      return await complycube.token.generate(clientId, {
        referrer: "*://*/*",
      });
    } catch (error) {
      console.error("Error generating token:", error);
      throw error;
    }
  }

  static async getCheckStatus(checkId: string) {
    try {
      return await complycube.check.get(checkId);
    } catch (error) {
      console.error("Error fetching check status:", error);
      throw error;
    }
  }
}
