import { useContext } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryComponent } from '../types';

function useComponentData(id: string) {
    const dataCtx: any = useContext(getDiscoveryCms().getContext());
    const components = dataCtx.components;

    return components.find((component: DiscoveryComponent) => component._id === id);
}
export default useComponentData;
