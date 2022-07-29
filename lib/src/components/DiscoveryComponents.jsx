import { useContext } from 'react';
import { getDiscoveryCms } from '../DiscoveryCms';
import DiscoveryComponent from './DiscoveryComponent';

export default function DiscoveryComponents() {
    const dataCtx = useContext(getDiscoveryCms().getContext());
    const components = dataCtx.components ?? [];

    return components.map((componentData) => DiscoveryComponent(componentData));
}
