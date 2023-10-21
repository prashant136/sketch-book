import React from "react";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { useSelector, useDispatch } from "react-redux";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";

export default function Toolbox() {
    const dispatch = useDispatch();
    const menuSelector = useSelector((state) => state.menu);

    const strokeColor = menuSelector.activeMenuItem === MENU_ITEMS.PENCIL;
    const brushSize =
        menuSelector.activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;
    const activeItem = menuSelector.activeMenuItem;

    const updateBrushSize = (e) => {
        console.log("updatebrushsize", e.target.value);
        dispatch(changeBrushSize({ item: activeItem, size: e.target.value }));
    };

    const updateStokeColor = (value) => {
        console.log("updateStokeColor", value);
        dispatch(changeColor({ item: activeItem, color: value }));
    };

    return (
        <div className={styles.toolBoxContainer}>
            {strokeColor && (
                <div className={styles.toolItem}>
                    <h4 className={styles.toolText}> Stoke Color</h4>
                    <div className={styles.itemContainer}>
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.BLACK }}
                            onClick={() => updateStokeColor(COLORS.BLACK)}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.RED }}
                            onClick={() => updateStokeColor(COLORS.RED)}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.GREEN }}
                            onClick={() => updateStokeColor(COLORS.GREEN)}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.BLUE }}
                            onClick={() => updateStokeColor(COLORS.BLUE)}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.ORANGE }}
                            onClick={() => updateStokeColor(COLORS.ORANGE)}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.YELLOW }}
                            onClick={() => updateStokeColor(COLORS.YELLOW)}
                        />
                    </div>
                </div>
            )}
            {brushSize && (
                <div className={styles.toolItem}>
                    <h4 className={styles.tooltext}> Brush Size</h4>
                    <div className={styles.itemContainer}>
                        <input
                            type='range'
                            min={1}
                            max={10}
                            step={1}
                            onChange={updateBrushSize}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
