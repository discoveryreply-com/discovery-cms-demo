import { DiscoveryContext, useComponentData } from '@discovery-frontend/cms-connector';

export default ({ itemId }) => {
    const itemData = useComponentData(itemId, DiscoveryContext);
    return (
        <>
            <div className={'w-54'}>
                <img src={itemData.image.url} className={'w-54'} />
                <h1>{itemData.headline}</h1>
            </div>
        </>
    );
};
