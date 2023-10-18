import React from "react";
import { HiPencil } from "react-icons/hi2";
import { FiRotateCcw, FiRotateCw } from "react-icons/fi";
import { BsEraserFill } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";
import styles from "./index.module.css";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS } from "@/constants";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";

export default function Menu() {
    const dispatch = useDispatch();
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

    return (
        <div className={styles.menuContainer}>
            <div
                className={cx(styles.iconWrapper, {
                    [styles.hover]: activeMenuItem === MENU_ITEMS.PENCIL
                })}
                onClick={() => {
                    dispatch(menuItemClick(MENU_ITEMS.PENCIL));
                }}
            >
                <HiPencil className={styles.icon} />
            </div>
            <div
                className={cx(styles.iconWrapper, {
                    [styles.hover]: activeMenuItem === MENU_ITEMS.ERASER
                })}
                onClick={() => {
                    dispatch(menuItemClick(MENU_ITEMS.ERASER));
                }}
            >
                <BsEraserFill className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FiRotateCcw className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FiRotateCw className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <HiDocumentDownload className={styles.icon} />
            </div>
        </div>
    );
}
