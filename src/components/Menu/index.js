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
    const { activeMenuItem, actionMenuItem } = useSelector(
        (state) => state.menu
    );

    const handleMenuItemClick = (item) => {
        dispatch(menuItemClick(item));
    };

    const handleActionItemClick = (item) => {
        dispatch(actionItemClick(item));
    };

    return (
        <div className={styles.menuContainer}>
            <div
                className={cx(styles.iconWrapper, {
                    [styles.hover]: activeMenuItem === MENU_ITEMS.PENCIL
                })}
                onClick={() => {
                    handleMenuItemClick(MENU_ITEMS.PENCIL);
                }}
            >
                <HiPencil className={styles.icon} />
            </div>
            <div
                className={cx(styles.iconWrapper, {
                    [styles.hover]: activeMenuItem === MENU_ITEMS.ERASER
                })}
                onClick={() => {
                    handleMenuItemClick(MENU_ITEMS.ERASER);
                }}
            >
                <BsEraserFill className={styles.icon} />
            </div>
            <div
                className={styles.iconWrapper}
                onClick={() => {
                    handleActionItemClick(MENU_ITEMS.UNDO);
                }}
            >
                <FiRotateCcw className={styles.icon} />
            </div>
            <div
                className={styles.iconWrapper}
                onClick={() => {
                    handleActionItemClick(MENU_ITEMS.REDO);
                }}
            >
                <FiRotateCw className={styles.icon} />
            </div>
            <div
                className={styles.iconWrapper}
                onClick={() => {
                    handleActionItemClick(MENU_ITEMS.DOWNLOAD);
                }}
            >
                <HiDocumentDownload className={styles.icon} />
            </div>
        </div>
    );
}
