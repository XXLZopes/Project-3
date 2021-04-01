import React, {useRef, useEffect, useState} from 'react';
let pinnedLocationCount = 0;
function Court() {
    
    const canvasRef = useRef(null);

    //get mouse position custom hook
    const useMousePosition = () => {
        const [mousePosition, setMousePosition] = useState({ xPos: null, yPos: null});
        const updateMousePosition = e => {
            setMousePosition({ xPos: e.clientX, yPos: e.clientY });
        };

        useEffect(() => {
            window.addEventListener('mousemove', updateMousePosition);

            return () => window.removeEventListener('mousemove', updateMousePosition);
        }, []);

        return mousePosition;
    };

    let { xPos, yPos } = useMousePosition();

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (xPos && yPos) {
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(xPos, yPos, 10, 0, 2*Math.PI)
        ctx.fill()
        console.log('x: ',xPos,'y: ',yPos);
        }
    }, [pinnedLocationCount]);
      

    return(
        <canvas 
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight}
        onClick={() => {
            pinnedLocationCount++
        }
    }
        ></canvas>
    )
}

export default Court;