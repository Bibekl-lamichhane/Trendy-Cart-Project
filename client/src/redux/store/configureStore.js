import { configureStore, Tuple, combineReducers } from "@reduxjs/toolkit";

import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlice from "../reducerSlices/userSlice";
import cartSlice from "../reducerSlices/cartSlice";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(logger),
});

export const persistor = persistStore(store);
