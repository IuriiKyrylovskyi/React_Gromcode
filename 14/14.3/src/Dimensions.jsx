import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimentions, setDimentions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimentions({ width: innerWidth, height: innerHeight });
    
    const handleResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimentions({ width: innerWidth, height: innerHeight });

    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  const { width, height } = dimentions;

  return (
    <div classNmae="dimensions">{`${width}px - ${height}px`}</div>
  )
}

export default Dimensions;