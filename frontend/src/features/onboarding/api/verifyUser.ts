import { CheckUserRequest, CheckUserStatusResponse } from "@/features/types/user";

export const verifyUser = async (data: CheckUserRequest) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_PATH}/users/verify`;
  // Create a URL object and append query parameters
  const url = new URL(apiUrl);

  url.searchParams.append('document_id', data.documentId);
  url.searchParams.append('client_id', data.clientId);

  if (data.livePhotoId) {
    url.searchParams.append('live_photo_id', data.livePhotoId);
  }


  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};


export const verifyUserStatus = async ({ checkId }: { checkId: string }): Promise<CheckUserStatusResponse> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_PATH}/users/status`;
  const url = new URL(apiUrl);

  url.searchParams.append('check_id', checkId);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();

}

