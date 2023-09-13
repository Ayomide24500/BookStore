import React, { useState, useLayoutEffect } from 'react';

const ColorChangingComponent = () => {
  const [color, setColor] = useState('red');

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      setColor('blue');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div style={{ backgroundColor: color, width: '100px', height: '100px' }}>
      This is a color-changing component
    </div>
  );
};

export default ColorChangingComponent;
