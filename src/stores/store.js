import { configureStore } from "@reduxjs/toolkit";

import interviewSlice  from "./interviewSlice";

// storeにreducerをいれていく
export const store = configureStore({
	reducer: {
		interview: interviewSlice
	},
});
