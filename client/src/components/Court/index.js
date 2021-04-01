import React, {useRef, useEffect, useState} from 'react';
let pinnedLocationCount = 0;
function Court() {
    
    const canvasRef = useRef(null);

    //get mouse position custom hook
    const useMousePosition = () => {
        //useState hook to set the mousePosition
        const [mousePosition, setMousePosition] = useState({ xPos: null, yPos: null});
        //event that changes the mousePosition to current mouse position when called
        const updateMousePosition = e => {
            setMousePosition({ xPos: e.clientX, yPos: e.clientY });
        };
        useEffect(() => {
            window.addEventListener('click', updateMousePosition);

            return () => window.removeEventListener('click', updateMousePosition);
        }, []);

        return mousePosition;
    };

    let { xPos, yPos } = useMousePosition();

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'red'
        ctx.beginPath()
        xPos && yPos ? ctx.arc(xPos, yPos, 15, 0, 2*Math.PI) : ctx.arc(xPos, yPos, 0, 0, 2*Math.PI)
        ctx.fill()

        console.log('x: ',xPos,'y: ',yPos);
    }, [pinnedLocationCount]);
      

    return(
        <canvas 
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight}
        onClick={() => {
            //change pinnedLocationCount to be an array of objects that gets set to ...pinnedLocation + {new object info}
            pinnedLocationCount++
            console.log(pinnedLocationCount)
            console.log('x: ',xPos,'y: ',yPos);
        }
    }
        ></canvas>
    )
}

export default Court;