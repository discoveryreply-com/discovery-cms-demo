import { useContext } from 'react';
import { getDiscoveryCms } from '../setup';

export default function usePagePalette() {
    const data = useContext(getDiscoveryCms().getContext());
    if (data !== null) {
        return (data.layout === undefined) ? data.details : data.layout;
    } else {
        return null;
    }
}

