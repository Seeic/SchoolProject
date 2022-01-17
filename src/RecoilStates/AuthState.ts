import axios from "axios";
import { atom, selector } from "recoil";

export const authState = atom({
  key: "authState",
  default: false,
});

export const boardState = selector({
  key: "board",
  get: async ({ get }) => {
    const response = await axios.get(
      `${process.env.API_URL}/EmploymentBoard.json`
    );

    return response.data;
  },
});
