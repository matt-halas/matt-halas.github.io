import {run} from '../fluidSim/main.js'
import {useRef, useEffect} from 'react'

function FluidSim() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            run(canvasRef.current);
        }
    }, [canvasRef.current])

  return (
    <>
        <canvas id="fluidCanvas" ref={canvasRef}></canvas>
        <div>
            <p style={{color: "black"}}>Viscosity:</p>
            <input type="range" min="0" max="100" defaultValue="50" className="slider" id="viscRange"/>

            <p style={{color: "black"}}>Diffusion:</p>
            <input type="range" min="0" max="100" defaultValue="50" className="slider" id="diffRange"/>

            <p style={{color: "black"}}>Dissolve Rate:</p>
            <input type="range" min="0" max="100" defaultValue="50" className="slider" id="dissolveRange"/>

            <p style={{color: "black"}}>Number of particles:</p>
            <input type="range" min="0" max="500" defaultValue="1" className="slider" id="particlesRange"/>
        </div>
    </>
  )
}

export default FluidSim
