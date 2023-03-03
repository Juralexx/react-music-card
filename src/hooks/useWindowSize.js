import React from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
    });

    const handleSize = React.useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', handleSize)
        return () => window.removeEventListener('resize', handleSize)
    }, [handleSize])

    return windowSize;
}

export default useWindowSize;