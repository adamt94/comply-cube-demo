import { CreateUserResponse } from "@/features/types/user";
import { UserDetails } from "../schema/user";

export const createUser = async (userData: UserDetails): Promise<CreateUserResponse> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_PATH}/users/create`;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

