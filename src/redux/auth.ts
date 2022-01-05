import { Action, createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import TokenService from "../services/TokenService";
import UserService from "../services/Userservice";
import { AuthState, SinginType } from "types";

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "Winter-Project/auth";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: true,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: true,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// login saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<SinginType>) {
  try {
    console.log(TokenService.get());

    yield put(pending());
    console.log(`1${action.payload}`);
    const token: string = yield call(UserService.login, action.payload);
    console.log(`2${action.payload}`);
    TokenService.set(token);
    yield put(success(token));
  } catch (error: any) {
    console.log(error);
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

// logout saga
function* logoutSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    yield call(UserService.logout, token);

    TokenService.set(token);
  } catch (error: any) {
    console.log(error);
  } finally {
    TokenService.remove();
    yield put(success(null));
  }
}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
