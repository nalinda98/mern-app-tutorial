import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import loadingSlice from "./slices/loadingSlice";
import userSlice from "./slices/userSlice";

const store= configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
        user: userSlice,
    }
});

export { store };