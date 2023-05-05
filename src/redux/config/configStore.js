import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";

const store = configureStore({
    reducer: { postList: postList },
});

export default store;