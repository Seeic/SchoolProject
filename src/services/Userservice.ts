import axios from "axios";
import { SinginType } from "types";

// API 주소
const USER_API_URL = "";
interface LoginResType {
  token: string;
}

export default class UserService {
  public static login({ id, password }: SinginType): SinginType {
    // const response = await axios.post<LoginResType>(USER_API_URL, {
    //   id,
    //   password,
    // });
    return { id, password };
  }

  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
