import axios from "axios";
import { SinginType } from "types/AuthType";

export const boardRequest = async (title: string) => {
  let temp;
  const result = await axios
    .get(`/api/${title}`)
    .then((response) => {
      temp = response.data.auth;
    })
    .catch((error) => {
      console.log(`error: ${error}`);
    });
  console.log(temp);
  console.log(`result1 : ${result}`);
};

// simpleboard는 상위 5개만 가져오는데 이 작업에서 미리 다 가져와서 캐싱 해놓을예정
// API 들이 나눠져있는지 하나의 보드에 필터링할 수 있는 구분자가 있어야한다.
export const simpleBoardRequest = async () => {
  const Information = await axios
    .get(`/api/InformationBoard`)
    .then((response) => {
      const title = response.data.title;
      const content = response.data?.contents;
      const time = response.data?.time;
    });
  console.log(Information);
  const BookSharing = axios.get(`/api/BookSharingBoard`).then((response) => {
    const title = response.data.title;
    const content = response.data?.contents;
    const time = response.data?.time;
  });
  const EmploymentBoard = axios.get(`/api/EmploymentBoard`).then((response) => {
    const title = response.data.title;
    const content = response.data?.contents;
    const time = response.data?.time;
  });
  const Mentoring = axios.get(`/api/MentoringBoard`).then((response) => {
    const title = response.data.title;
    const content = response.data?.contents;
    const time = response.data?.time;
  });
  const Project = axios.get(`/api/ProjectBoard`).then((response) => {
    const title = response.data.title;
    const content = response.data?.contents;
    const time = response.data?.time;
  });
  const Study = axios.get(`/api/Studyboard`).then((response) => {
    const title = response.data.title;
    const content = response.data?.contents;
    const time = response.data?.time;
  });
};

interface LoginResType {
  token: string;
}

export const authRequest = async ({ id, password }: SinginType) => {
  const authReq = await axios
    .post<LoginResType>("/api/auth", { id, password })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
