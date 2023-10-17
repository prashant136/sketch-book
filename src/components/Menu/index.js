import React from "react";
import { HiPencil } from "react-icons/hi2";
import { FiRotateCcw, FiRotateCw } from "react-icons/fi";
import { BsEraserFill } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";

import styles from "./index.module.css";

export default function Menu() {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper}>
                <HiPencil className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FiRotateCcw className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FiRotateCw className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <BsEraserFill className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <HiDocumentDownload className={styles.icon} />
            </div>
        </div>
    );
}
