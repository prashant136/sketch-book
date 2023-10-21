import React from "react";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { useSelector } from "react-redux";

export default function Toolbox() {
<<<<<<< Updated upstream
    const menuSelector = useSelector((state) => state.menu);

    const strokeColor = menuSelector.activeMenuItem === MENU_ITEMS.PENCIL;
    const brushSize =
        menuSelector.activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

    const updateBrushSize = (e) => {
        console.log(e.target.value);
=======
    const dispatch = useDispatch();
    const { activeMenuItem } = useSelector((state) => state.menu);
    const toolboxSelector = useSelector((state) => state.toolbox);

    const { color, size } = toolboxSelector[activeMenuItem];

    const strokeColor = activeMenuItem === MENU_ITEMS.PENCIL;
    const brushSize = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

    const updateBrushSize = (e) => {
        dispatch(
            changeBrushSize({ item: activeMenuItem, size: e.target.value })
        );
    };

    const updateStokeColor = (value) => {
        dispatch(changeColor({ item: activeMenuItem, color: value }));
>>>>>>> Stashed changes
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
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.RED }}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.GREEN }}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.BLUE }}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.ORANGE }}
                        />
                        <div
                            className={styles.colorBox}
                            style={{ background: COLORS.YELLOW }}
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
                            value={size}
                            onChange={updateBrushSize}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
