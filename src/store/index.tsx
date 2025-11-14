import { configureStore } from "@reduxjs/toolkit";
import recipesSlices from "./features/recipes/recipesSlice";

export const store = configureStore({
	reducer: {
		recipes: recipesSlices,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
