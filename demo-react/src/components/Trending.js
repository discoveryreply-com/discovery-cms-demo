import { DiscoveryContext, DiscoveryComponent, useComponentData } from '@discoverycms/connector';

export default function Trending({ componentId }) {
    const componentData = useComponentData(componentId, DiscoveryContext);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    return (
        <div className="bg-white py-12" data-discovery-id={componentId}>
            <div className="text-blue-900 font-semibold text-4xl mb-12 flex justify-center">
                {componentData.headline ?? ''}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center place-content-center md:mr-20 md:ml-20 mb-20">
                {componentData.items.map((item) => DiscoveryComponent(item))}
            </div>
        </div>
    );
}
