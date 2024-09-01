import React, { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Loader = () => {
  const loadingBarRef = useRef(null);

  useEffect(() => {
    loadingBarRef.current.continuousStart();
    
    // Complete the loading bar after a delay (e.g., simulating data load)
    const timer = setTimeout(() => {
      loadingBarRef.current.complete();
    }, 3000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingBar color="#ff00ee" ref={loadingBarRef} />
  );
}

export default Loader;
