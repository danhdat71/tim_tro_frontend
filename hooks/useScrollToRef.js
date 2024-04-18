import { useEffect } from 'react';

function useScrollToCenterRef(ref) {
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [ref?.current]);
}

export default useScrollToCenterRef;