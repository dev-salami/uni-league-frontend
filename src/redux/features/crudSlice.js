"use client";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	tempFixtures: [],
	tempResults: [],
	test: [],
	selectedMatchday: 4,
};
const crudSlice = createSlice({
	name: "crud",
	initialState,
	reducers: {
		addFixtures: (state, { payload }) => {
			state.tempFixtures = state.tempFixtures.filter(
				(team) => team.id !== payload.id
				// && team.Team1B === payload.Team1B
			);

			state.tempFixtures = [...state.tempFixtures, payload];
			console.log(state.tempFixtures);
			// console.log(state.test);
		},
	},
});
export const { addFixtures } = crudSlice.actions;
export default crudSlice.reducer;
