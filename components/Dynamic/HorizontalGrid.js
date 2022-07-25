import { DiscoveryContext, useComponentData } from '@discovery-frontend/cms-connector';
import DiscoveryComponent from '../Discovery/DiscoveryComponent';

export default ({ componentId }) => {
    const componentData = useComponentData(componentId, DiscoveryContext);
    const items = componentData.items ?? [];

    return (
        <div data-discovery-id={componentId} className={'flex justify-between'}>
            {items.map((item) => DiscoveryComponent(item))}
        </div>
    );
};
