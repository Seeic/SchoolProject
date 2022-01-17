import axios from "axios";
import { atom, selector } from "recoil";

export const _getBoardInfoTrigger = atom({
  key: "_getBoardInfoTrigger",
  default: {},
});

export const getBoardInfo = selector({
  key: "getBoardInfo",
  get: async ({ get }) => {
    get(_getBoardInfoTrigger); // 트리거의 상태를 구독해서 트리거 값이 변경될 때마다 새로 계산
    const response = await axios
      .get(`${process.env.API_URL}/EmploymentBoard.json`)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  },
  set: ({ set }) => {
    // 게시판을 Write할 때 사용하는데 게시판 쓰는 로직을 작성해야한다.
  },
});
