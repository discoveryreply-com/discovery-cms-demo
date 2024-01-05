import { useContext } from 'react';
import { getDiscoveryCms } from '../setup';

function usePageData() {
    return useContext(getDiscoveryCms().getContext());
}

export default usePageData;
