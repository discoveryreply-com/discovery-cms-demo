import { useComponentData } from '@discoverycms/connector';
import DiscoveryComponent from '../Discovery/DiscoveryComponent';

export default ({ componentId }) => {
    const componentData = useComponentData(componentId);
    const items = componentData.items ?? [];

    return (
        <div data-discovery-id={componentId} className={'flex justify-between'}>
            {items.map((item) => DiscoveryComponent(item))}
        </div>
    );
};
