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

    //Prop drill width and height so that it can be updated on screen resize
    useEffect(() => {
        //STILL NEED TO DO: Push pin data to array and array to database with fetch request
        //Initiate Canvas
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'red'
        ctx.beginPath()
        xPos && yPos ? ctx.arc(xPos, yPos, 15, 0, 2*Math.PI) : ctx.arc(xPos, yPos, 0, 0, 2*Math.PI)
        ctx.fill()

        console.log('x: ',xPos,'y: ',yPos);
    }, [pinnedLocationCount]);

    //Court Lines Start
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let width = canvas.width;
        let height = window.innerHeight;
        let courtLinesWidth = width*height*.000022;
        let center = width/2;
        let half = height/2;
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'white'
        ctx.lineWidth = (courtLinesWidth)

        //Draw Half Court
        function drawHalf() {
            let halfCourtX = width/2
            let halfCourtY = height/2
            let bigCircleWidth = width*.15
            let smallCircleWidth = width *.05

            //horizontal line
            ctx.beginPath()
            ctx.moveTo(0, halfCourtY);
            ctx.lineTo(width, halfCourtY);
            ctx.stroke();
            //circle small
            ctx.arc(halfCourtX, halfCourtY, width*.05, 0, 2*Math.PI);
            //circle big
            ctx.arc(halfCourtX, halfCourtY, bigCircleWidth, 0, 2*Math.PI);
            ctx.stroke();
            return(
                {
                    x: halfCourtX,
                    y: halfCourtY,
                    bigCircleWidth: bigCircleWidth,
                    smallCircleWidth: smallCircleWidth
                }
            )
            } 
            drawHalf();
    
            //Draw 3 Point Line
            function drawThreePointLine() {
                    //center+with & center-width = x values for 2 lines
                
                let y;
                let distanceFromHalf = half-half/2-drawHalf().bigCircleWidth
                let r = width/2.5
                    for(let x=0; x<=width; x+=.5) {
                      //Draw half circle
                    ctx.beginPath()
                    let y= .5*Math.sqrt((r*r)-x*x)+distanceFromHalf
                    ctx.arc(x+center, y, courtLinesWidth/2.2, 0, 2*Math.PI);
                    ctx.arc(-x+center, y, courtLinesWidth/2.2, 0, 2*Math.PI);
                    ctx.fill();
                
                    }
             
                    let rx = center+r
                    y= .02655*Math.sqrt(r*r)
                    console.log('x: ',rx)
                    console.log('y: ', y+distanceFromHalf)

                    ctx.beginPath()
                    ctx.moveTo(rx, 0);
                    ctx.lineTo(rx, y+distanceFromHalf);
                    ctx.stroke();

                    let lx = center-width/2.5
                    ctx.beginPath()
                    ctx.moveTo(lx, 0);
                    ctx.lineTo(lx, y+distanceFromHalf);
                    ctx.stroke();

                    return({
                        rightX: rx,
                        leftX: lx,
                        height: y+distanceFromHalf
                    })

            } 
            drawThreePointLine();

        //Draw Free Throw
            function drawFreeThrow() {
            let height = drawThreePointLine().height;

            //Start at 
                let y;
                let r = width/7
                for(let x=0; x<=width; x+=.5) {
                    //Draw half circle
                  ctx.beginPath()
                  y= Math.sqrt((r*r)-x*x)+height*.93
                  ctx.arc(x+center, y, courtLinesWidth/2.2, 0, 2*Math.PI);
                  ctx.arc(-x+center, y, courtLinesWidth/2.2, 0, 2*Math.PI);
                  ctx.fill();
              
                  }

                  let x = center+r
                    y= .02655*Math.sqrt(r*r)*2
                    console.log('x: ',x)
                    console.log('y: ', y)

                    ctx.beginPath()
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, height);
                    ctx.stroke();

                    x = center-r
                    ctx.beginPath()
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, height);
                    ctx.stroke();

                
                
            } 
            drawFreeThrow()


            
            console.log('width: ', width, 'height: ', height)
    }, []) //Add use effect when screen size variables change [screen size variable]
    
    let canvasX
    window.innerWidth<650 ? canvasX = window.innerWidth : canvasX = 650
    return(
        <canvas 
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight}
        onClick={() => {
            //change pinnedLocationCount to be an array of objects that gets set to ...pinnedLocation + {new object info}
            pinnedLocationCount++
           console.log('x: ', xPos, 'y: ', yPos)
        }
    }
        ></canvas>
    )
} //Court Lines End

export default Court;