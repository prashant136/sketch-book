import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
import { MENU_ITEMS } from "@/constants";

export default function Board() {
    const dispatch = useDispatch();
    const canvasRef = useRef(null);
    const showDrawRef = useRef(null);

    /***
     *
     * ✅ REDO and UNDO feature
     *  👉 create and array and a pointer(historyPointer)
     *  👉 historyPointer is  initially pointing to the last element of array
     *  👉 for UNDO - historyPointer will move  -->  first elmenet of array
     *  👉 for REDO - historyPointer will move -->  last elmenet of array
     *
     *  🚩 whenever mouseup event fires (user releases the mouse), store that snapshot into keepUndoRedoHistory variable.
     *
     */
    const keepUndoRedoHistory = useRef([]); // story all the history of canvas img detail
    const historyPointer = useRef(0); // index that will move over keepUndoRedoHistory array for undo and redo

    // picking different slices from redux store
    const { activeMenuItem, actionMenuItem } = useSelector(
        (state) => state.menu
    );
    const toolboxSelector = useSelector((state) => state.toolbox);

    const { color, size } = toolboxSelector[activeMenuItem];

    console.log({ actionMenuItem });

    // -------------- triggers download feature -------------
    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
            const URL = canvas.toDataURL();
            const anchor = document.createElement("a");
            anchor.href = URL;
            // you can give title to this image
            const titleWhileDownloding = prompt(
                "Give a title for this sketch:"
            );
            anchor.download = titleWhileDownloding;
            anchor.click();
        } else if (actionMenuItem === MENU_ITEMS.UNDO) {
            if (historyPointer.current > 0) {
                historyPointer.current -= 1; // historyPointer will go till Zeroth index
            }
            const imgData = keepUndoRedoHistory.current[historyPointer.current];
            context.putImageData(imgData, 0, 0); // paints data from the given ImageData object onto the canvas.
        } else if (actionMenuItem === MENU_ITEMS.REDO) {
            if (
                historyPointer.current <
                keepUndoRedoHistory.current.length - 1
            ) {
                historyPointer.current += 1; // historyPointer will go till Last index
            }
            const imgData = keepUndoRedoHistory.current[historyPointer.current];
            context.putImageData(imgData, 0, 0);
        }
        dispatch(actionItemClick(null));
    }, [actionMenuItem, dispatch]);

    // before (mounting) browser paint
    useLayoutEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const beginPath = (x, y) => {
            context.beginPath();
            context.moveTo(x, y);
        };

        const drawLine = (x, y) => {
            context.lineTo(x, y);
            context.stroke();
        };
        const handleMouseDown = (e) => {
            showDrawRef.current = true;
            beginPath(e.clientX, e.clientY);
        };

        const handleMouseMove = (e) => {
            if (!showDrawRef.current) return;
            drawLine(e.clientX, e.clientY);
        };

        const handleMouseUp = (e) => {
            showDrawRef.current = false;
            // 👇 store this canvas detail to keepUndoRedoHistory for undo and redo.
            const imgData = context.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            ); // detail of specified portion of the canvas
            keepUndoRedoHistory.current.push(imgData); // store to keepUndoRedoHistory
            historyPointer.current = keepUndoRedoHistory.current.length - 1; // pointing to the last index
        };

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);

        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    // --------------- brush size and color changes ------------
    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const changeConfig = () => {
            context.strokeStyle = color;
            context.lineWidth = size;
        };
        changeConfig();
    }, [color, size]);

    return <canvas ref={canvasRef}>Board</canvas>;
}
