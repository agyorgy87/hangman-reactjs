import { useRef, useEffect } from 'react';
import "../css/HangmanWithCanvas.css";


const HangmanWithCanvas = ({hangManStatus}) => {

    useEffect(() => {

        let ctx = null;

        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;

        ctx = canvasEle.getContext("2d");

        const drawLine = (info, style = {}) => {
            const { x, y, x1, y1 } = info;
            const { color = 'grey', width = 7 } = style;
        
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
        }
        
        const drawCircle = (info, style = {}) => {
            const {x, y, r, sAngle, eAngle} = info;
            const { color = 'grey', width = 7 } = style;
        
            ctx.beginPath();
            ctx.arc(x, y, r, sAngle, eAngle * Math.PI);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke()
        }

        if(hangManStatus === 1) {
        //1.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        }else if(hangManStatus === 2){
        //2.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //2.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        }else if(hangManStatus === 3){
        //3.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //3.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //3.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });
        }else if(hangManStatus === 4){
        //4.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //4.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //4.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //4.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 });   
        }else if(hangManStatus === 5){
        //5.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //5.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //5.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //5.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 });  
        //5.two arms
            drawLine({ x: 150, y: 200, x1: 120, y1: 250 });
            drawLine({ x: 150, y: 200, x1: 180, y1: 250 });
        }else if(hangManStatus === 6){
        //6.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //6.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //6.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //6.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 }); 
        //6.two arms
            drawLine({ x: 150, y: 200, x1: 120, y1: 250 });
            drawLine({ x: 150, y: 200, x1: 180, y1: 250 });
        //6.mouth
            drawCircle({x: 150, y:160, r:15, sAngle:3, eAngle:2 });
        }else if(hangManStatus === 7){
        //7.hanging tree
            drawLine({ x: 200, y: 400, x1: 400, y1: 400 });
            drawLine({ x: 300, y: 400, x1: 300, y1: 50 });
            drawLine({ x: 300, y: 50, x1: 150, y1: 50 });
            drawLine({ x: 150, y: 50, x1: 150, y1: 100 });
        //7.head
            drawCircle({x: 150, y:140, r:40, sAngle:0, eAngle:2 })
        //7.body
            drawLine({ x: 150, y: 180, x1: 150, y1: 290 });     
        //7.two legs
            drawLine({ x: 150, y: 290, x1: 120, y1: 350 });
            drawLine({ x: 150, y: 290, x1: 180, y1: 350 }); 
        //7.two arms
            drawLine({ x: 150, y: 200, x1: 120, y1: 250 });
            drawLine({ x: 150, y: 200, x1: 180, y1: 250 });
        //7.mouth
            drawCircle({x: 150, y:160, r:15, sAngle:3, eAngle:2 });
        //7.left eye
            drawLine({ x: 130, y: 110, x1: 145, y1: 130 });
            drawLine({ x: 130, y: 130, x1: 145, y1: 110 });
        //7.right eye
            drawLine({ x: 155, y: 110, x1: 170, y1: 130 });
            drawLine({ x: 155, y: 130, x1: 170, y1: 110 });
        }
    }, [hangManStatus]);

    const canvas = useRef();

    return (
        <div className="hanged-man-container">
            <canvas 
            className="canvas-board"  
            ref={canvas}/>
        </div>
    )
}

export default HangmanWithCanvas;