import { useContext } from 'react';
import { getDiscoveryCms } from '../setup';

export default function usePalette() {
    const data = useContext(getDiscoveryCms().getContext());
    if (data !== null) {
        return (data.layout === undefined) ? data.details : data.layout.details;
    } else {
        return null;
    }
}

