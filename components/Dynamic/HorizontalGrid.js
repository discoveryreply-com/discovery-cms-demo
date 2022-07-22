import HorizontalGridItem from './HorizontalGridItem';
import { DiscoveryContext, useComponentData } from '@discovery-frontend/cms-connector';

export default ({ componentId }) => {
    const componentData = useComponentData(componentId, DiscoveryContext);
    const items = componentData.items ?? [];

    return (
        <>
            <div className={'flex justify-between'}>
                {items.map(({ _id }) => {
                    return <HorizontalGridItem itemId={_id} key={_id} />;
                })}
            </div>
        </>
    );
};
