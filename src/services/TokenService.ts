import AsyncStorage from "@react-native-async-storage/async-storage";

const LOCAL_STORAGE_TOKEN_KEY_NAME = "auth";

export default class TokenService {
  public static async get(): Promise<string | null> {
    const jsonValue = await AsyncStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }
  public static async set(token: string): Promise<void> {
    try {
      const jsonValue = JSON.stringify(token);
      AsyncStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, jsonValue);
    } catch (error) {
      console.log(error);
    }
  }

  public static remove(): void {
    try {
      AsyncStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
    } catch (error) {
      console.log(error);
    }
  }
}
