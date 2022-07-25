import { DiscoveryContext, useComponentData } from '@discovery-frontend/cms-connector';

export default ({ componentId }) => {
    const itemData = useComponentData(componentId, DiscoveryContext);

    if (itemData) {
        return (
            <>
                <div className={'w-54'} data-discovery-id={componentId}>
                    <img src={itemData.image.url} className={'w-54'} />
                    <h1>{itemData.headline}</h1>
                </div>
            </>
        );
    }
};
