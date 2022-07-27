import { useComponentData } from '@discoverycms/connector';

export default ({ componentId }) => {
    /**
     * @param itemData.headline
     **/
    const itemData = useComponentData(componentId);

    if (itemData) {
        return (
            <>
                <div className={'w-54'} data-discovery-id={componentId}>
                    <img src={itemData.image.url} className={'w-54'} alt={'image'} />
                    <h1>{itemData.headline}</h1>
                </div>
            </>
        );
    }
};
