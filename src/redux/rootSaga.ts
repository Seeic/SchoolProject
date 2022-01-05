import { authSaga } from "./auth";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  console.log("go");
  yield all([authSaga()]);
}
