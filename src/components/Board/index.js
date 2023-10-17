import React, { useEffect, useRef } from "react";
import "./index.module.css";

export default function Board() {
    const canvasRef = useRef(null);

    console.log(canvasRef);
    useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current
        // const context = canvas.getContext('2d')
console.log('canvas', canvas);
        // when mounting
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }, [])
    return <canvas ref={canvasRef}>Board</canvas>;
}
