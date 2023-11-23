import './index.scss'
import { useEffect } from 'react';

const PE = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
    
        // Your canvas-specific code goes here
    
        return () => {
          // Cleanup or remove event listeners if needed
        };
      }, []); // Empty dependency array ensures the useEffect runs only once, similar to componentDidMount
    
      return (
        <canvas id="canvas" onContextMenu={(e) => e.preventDefault()}></canvas>
      );
}

export default PE