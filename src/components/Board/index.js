import React, { useEffect, useRef } from "react";
import "./index.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Board() {
    const canvasRef = useRef(null);

    // picking different slices from redux store
    const menuSelector = useSelector((state) => state.menu);
    const toolboxSelector = useSelector((state) => state.toolbox);

    console.log({ menuSelector, toolboxSelector });
    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        // when mounting
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);
    return <canvas ref={canvasRef}>Board</canvas>;
}
