import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import TokenService from "../services/TokenService";
import reducer from "./reducer";
import rootSaga from "./rootSaga";

// middleware 생성, store 실행
const create = () => {
  const token = TokenService.get();

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer(),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
