import React, { useEffect, useRef } from "react";
import "./index.module.css";

export default function Board() {
    const canvasRef = useRef(null);

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
