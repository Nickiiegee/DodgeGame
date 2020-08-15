import React, { useState } from 'react';

export default () => {
    const UP = 'UP';
    const LEFT = 'LEFT';
    const DOWN = 'DOWN';
    const RIGHT = 'RIGHT';
    const player = useState();

    const handleKeyDown = () => {
        let newDirection;
        
        window.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 37:
                newDirection = {top: 0, left: -1, dir: LEFT};
                break;
            case 38:
                newDirection = {top: -1, left: 0, dir: UP};
                break;
            case 39:
                newDirection = {top: 0, left: 1, dir: RIGHT};
                break;
            case 40:
                newDirection = {top: 1, left: 0, dir: DOWN};
                break;
            default:
                return;
        };

    }
); }

  return (
    <>
        <div className="square" onChange={handleKeyDown} />
    </>
  )
}

