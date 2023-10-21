import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./index.module.css";
<<<<<<< Updated upstream
=======
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
import { MENU_ITEMS } from "@/constants";
>>>>>>> Stashed changes

export default function Board() {
    const dispatch = useDispatch();
    const canvasRef = useRef(null);
    const showDrawRef = useRef(null);
    const [titleWhileDownloding, setTitleWhileDownloding] = useState(undefined);

<<<<<<< Updated upstream
=======
    // picking different slices from redux store
    const { activeMenuItem, actionMenuItem } = useSelector(
        (state) => state.menu
    );
    const toolboxSelector = useSelector((state) => state.toolbox);

    const { color, size } = toolboxSelector[activeMenuItem];

    console.log({ actionMenuItem });

    // -------------- triggers download feature -------------
>>>>>>> Stashed changes
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
