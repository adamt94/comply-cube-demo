
type ClientDetails = {
  id: string;
  type: 'person';
  email: string;
  personDetails: {
    firstName: string;
    lastName: string;
  };
};

export type CreateUserResponse = {
  token: string;
  client: ClientDetails;
};



type DocumentCapture = {
  documentId: string;
  documentType: string;
};

type FaceCapture = Pick<Partial<{ livePhotoId: string; liveVideoId: string }>, 'livePhotoId' | 'liveVideoId'>;

export type CaptureData = {
  documentCapture: DocumentCapture;
  faceCapture: FaceCapture;
  clientId: string;
};

export type CheckUserRequest = {
  documentId: string;
  clientId: string;
  livePhotoId?: string;
};

export type CheckUserStatusResponse = {
  id: string;
  status: string;

  result: {
    outcome: string;
  }
}


