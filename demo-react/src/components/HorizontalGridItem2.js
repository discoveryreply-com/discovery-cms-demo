import { DiscoveryContext, useComponentData } from '@discoverycms/connector';

export default ({ componentId }) => {
    const itemData = useComponentData(componentId, DiscoveryContext);

    if (itemData) {
        return (
            <>
                <div className={'w-54'} data-discovery-id={componentId}>
                    <video src={itemData.video.url} className={'w-54'} />
                    <div dangerouslySetInnerHTML={{ __html: itemData.description }}></div>
                </div>
            </>
        );
    }
};
