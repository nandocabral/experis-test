import { configureStore } from "@reduxjs/toolkit";
import storageReducer from "./storage";

export default configureStore({
  reducer: {
    onlineStore: storageReducer,
  },
});
