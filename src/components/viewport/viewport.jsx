import React from 'react'
import "./viewport.css"
import { useEffect, useState } from "react";
function viewport() {
     const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const update = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);
  return (
    <div className="viewport">
        {window.innerWidth} × {window.innerHeight}
    </div>
  )
}

export default viewport