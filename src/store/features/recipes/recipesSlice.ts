import type { IRecipes } from "@/@types/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { items: IRecipes[] } = {
  items: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe() {},
  },
});

export const { addRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
