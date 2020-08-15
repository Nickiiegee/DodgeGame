import React, { useState, useEffect } from 'react';

export default () => {
    const [seconds, setSeconds] = useState(0);
  const isActive = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  
  return (
    <div className="countdown">
      Time: {seconds}sec
    </div>
  )
}
