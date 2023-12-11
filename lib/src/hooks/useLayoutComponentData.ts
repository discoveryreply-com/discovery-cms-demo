import { useContext } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryComponent } from '../types';

function useLayoutComponentData(id: string) {
    const dataCtx: any = useContext(getDiscoveryCms().getContext());
    const components = dataCtx.layout.components;

    return components.find((component: DiscoveryComponent) => component._id === id);
}
export default useLayoutComponentData;