import { configureStore } from "@reduxjs/toolkit";
import photo from "./photo";
const store = () => {
  return configureStore({ reducer: { photo: photo } });
};
export default store;
