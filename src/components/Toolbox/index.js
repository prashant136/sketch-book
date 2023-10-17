import React from "react";
import styles from "./index.module.css";
import { COLORS } from "@/constants";

export default function Toolbox() {
    const updateBrushSize = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className={styles.toolBoxContainer}>
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
        </div>
    );
}
