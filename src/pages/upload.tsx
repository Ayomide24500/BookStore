import React, { useState, useEffect, useLayoutEffect } from 'react';

function App(): JSX.Element {
  const [width, setWidth] = useState<number>(0);
  // useEffect runs after the component renders
  useEffect(() => {
    console.log('useEffect - Component has rendered');
  });

  // useLayoutEffect runs synchronously after all DOM mutations
  useLayoutEffect(() => {
    console.log('useLayoutEffect - DOM layout is updated');
    const newWidth = document.getElementById('box')?.offsetWidth;
    if (newWidth !== undefined) {
      setWidth(newWidth);
    }
  }, []);

  // Update the width every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newWidth = Math.floor(Math.random() * 200) + 100; // Generate a random width between 100 and 300
      setWidth(newWidth);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <div id="box" style={{ width: `${width}px`, height: '200px', background: 'blue' }}>
        {/* Content */}
      </div>
      <p>Box width: {width}px</p>
    </div>
  );
}

export default App;