import { configureStore } from "@reduxjs/toolkit";
import postList from "../modules/postListSlice";

const store = configureStore({
    reducer: { postList: postList },
});

export default store;