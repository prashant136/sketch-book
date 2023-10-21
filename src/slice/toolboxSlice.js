import { createSlice } from "@reduxjs/toolkit";
import { COLORS, MENU_ITEMS } from "@/constants";

const initialState = {
    [MENU_ITEMS.PENCIL]: {
        color: COLORS.BLACK,
        size: 3
    },
    [MENU_ITEMS.ERASER]: {
        color: COLORS.WHITE,
        size: 3
    },
    [MENU_ITEMS.UNDO]: {},
    [MENU_ITEMS.REDO]: {},
    [MENU_ITEMS.DOWNLOAD]: {}
};
const menuSlice = createSlice({
    name: "toolbox",
    initialState,
    reducers: {
        chnageColor: (state, action) => {
            state[action.payload.item].color = action.payload.color;
        },
        changeBrushSize: (state, action) => {
            state[action.payload.item].size = action.payload.size;
        }
    }
});
export const { menuItemClick, actionItemClick } = menuSlice.actions;
export default menuSlice.reducer;
