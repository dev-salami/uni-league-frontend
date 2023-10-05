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
				(team) => team.identifier !== payload.identifier
				// && team.Team1B === payload.Team1B
			);

			state.tempFixtures = [...state.tempFixtures, payload];
			console.log(state.tempFixtures);
			// console.log(state.test);
		},
		deleteFixtures: (state, { payload }) => {
			state.tempFixtures = [];
			console.log("Yeah");
		},
	},
});
export const { addFixtures, deleteFixtures } = crudSlice.actions;
export default crudSlice.reducer;
