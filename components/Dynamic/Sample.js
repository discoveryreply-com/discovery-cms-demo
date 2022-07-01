import {DiscoveryContext, useComponentData} from '@discovery-frontend/cms-connector'

export default function Sample({componentId}) {
    const componentData = useComponentData(componentId, DiscoveryContext);

    if (componentData === undefined) {
        return <span>Loading..</span>
    }
    return (
        <div
            className="py-10 bg-white"
            data-discovery-id={componentId}
        >
            <div className="text-blue-900 font-semibold text-4xl mb-10 flex justify-center">
                {componentData.title}
            </div>
            This is a sample dynamic component

            <div dangerouslySetInnerHTML={{ __html: componentData.body ?? '' }} />
        </div>
    );
}