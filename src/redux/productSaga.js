import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:8080/products");
  data = yield data.json();
  console.warn("Action is called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
  //   console.warn("get product saga called");
}

function* search(data) {
  let result = yield fetch("http://localhost:8080/products?q=" + data.query);
  result = yield result.json();
  console.warn("Action is called", result);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery("SEARCH_PRODUCT", search);
}

export default productSaga;
