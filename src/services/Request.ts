import axios from "axios";
import { SinginType } from "types/AuthType";
// dotenv.config();

export const boardRequest = async (title: string) => {
  let temp;
  const result = await axios
    .get(`${process.env.API_HOST}/auth.json`)
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
    .get(`${process.env.API_URL}/InformationBoard.json`)
    .then((response) => {
      const title = response.data.title;
      const content = response.data?.contents;
      const time = response.data?.time;
    });
  console.log(Information);
  const BookSharing = axios
    .get(`${process.env.API_URL}/BookSharingBoard.json`)
    .then((response) => {
      const title = response.data.title;
      const content = response.data?.contents;
      const time = response.data?.time;
    });
  const EmploymentBoard = axios
    .get(`${process.env.API_URL}/EmploymentBoard.json`)
    .then((response) => {
      const title = response.data.title;
      const content = response.data?.contents;
      const time = response.data?.time;
    });
  const Mentoring = axios
    .get(`${process.env.API_URL}/MentoringBoard.json`)
    .then((response) => {
      const title = response.data.title;
      const content = response.data?.contents;
      const time = response.data?.time;
    });
  const Project = axios
    .get(`${process.env.API_URL}/ProjectBoard.json`)
    .then((response) => {
      const title = response.data.title;
      const content = response.data?.contents;
      const time = response.data?.time;
    });
  const Study = axios
    .get(`${process.env.API_URL}/StudyBoard.json`)
    .then((response) => {
      const title = response.data.title;
      const content = response.data?.contents;
      const time = response.data?.time;
    });
};

interface LoginResType {
  id: string;
  password: number;
  token: string;
}
interface Auth {
  Auth: LoginResType;
}

export const authRequest = async () => {
  const authReq = await axios
    .get<Auth>(`${process.env.API_URL}/auth.json`)
    .then((response) => {
      console.log(process.env.API_HOST);
      console.log(response.data?.Auth);
    })
    .catch((error) => {
      console.log(error);
    });
};
