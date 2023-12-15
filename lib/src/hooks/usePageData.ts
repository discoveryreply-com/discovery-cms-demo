import { useContext } from 'react';
import { getDiscoveryCms } from '../setup';

function usePageData(id: string) {
    return useContext(getDiscoveryCms().getContext());
}

export default usePageData;
