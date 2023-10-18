/***
 *
 * What is createSlice in Redux Toolkit?
 *
 * createSlice is a higher order function that accepts an initial state, an object
 * full of reducer functions and a slice name. It automatically generates action
 * creators and action types that correspond to the reducers and state.
 *
 * In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
 * This function aims to reduce the boilerplate required to add data to redux.
 * Internally, it uses createAction and createReducer.
 *
 */

import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";

const initialState = {
    activeMenuItem: MENU_ITEMS.PENCIL,
    actionMenuItem: null,
};
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        menuItemClick: (state, action) => {
            state.activeMenuItem = action.payload;
        },
        actionItemClick: (state, action) => {
            state.actionMenuItem = action.payload;
        }
    }
});
export const { menuItemClick, actionItemClick } = menuSlice.actions;
export default menuSlice.reducer