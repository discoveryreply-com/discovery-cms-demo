import { DiscoveryContext, useComponentData } from '@discovery-frontend/cms-connector';

export default ({ componentId }) => {
    const itemData = useComponentData(componentId, DiscoveryContext);

    if (itemData) {
        return (
            <>
                <div className={'w-54'}>
                    <video src={itemData.video.url} className={'w-54'} />
                    <div dangerouslySetInnerHTML={{ __html: itemData.description }}></div>
                </div>
            </>
        );
    }
};
