import EditorChoiceItem from "./EditorsChoiceItem";

export default function EditorChoice({ componentId }) {
    //const componentData = useComponentData(componentId, DiscoveryContext);
    //if (componentData === undefined) {
        //return <span>Loading..</span>;

    var componentData = {
        "fields": 
            {
            "item1": {
                "metadata": {
                    "title": "title",
                    "description": "description",
                },
                "url":"https://dc8ccz5qcwwyb.cloudfront.net/media-staging/25/89/0325aa07-44b1-493d-9691-da64aa96477a/94c780fa-63a8-445f-b0fb-4491ee4c0416.jpg",
            },
            "item2": {
                "metadata": {
                    "title": "title",
                    "description": "description",
                },
                "url":"https://dc8ccz5qcwwyb.cloudfront.net/media-staging/25/89/0325aa07-44b1-493d-9691-da64aa96477a/94c780fa-63a8-445f-b0fb-4491ee4c0416.jpg",
            },
            "item3": {
                "metadata": {
                    "title": "title",
                    "description": "description",
                },
                "url":"https://dc8ccz5qcwwyb.cloudfront.net/media-staging/25/89/0325aa07-44b1-493d-9691-da64aa96477a/94c780fa-63a8-445f-b0fb-4491ee4c0416.jpg",
            },
            "headline": "prova",
            
            }
    };

    return (
        <div className="py-10 bg-white" data-discovery-id={componentId}>
            <div className="text-blue-900 font-semibold text-4xl mb-10 flex justify-center">
                {componentData.fields.headline}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center place-content-center mr-10 ml-10 md:mr-5 md:ml-5 xl:mr-20 xl:ml-20">
                <EditorChoiceItem
                    title={componentData.fields.item1.metadata?.title ?? ''}
                    description={componentData.fields.item1.metadata?.description ?? ''}
                    image={componentData.fields.item1.url ?? '/no-image.jpg'}
                />
                <EditorChoiceItem
                    title={componentData.fields.item2.metadata?.title ?? ''}
                    description={componentData.fields.item2.metadata?.description ?? ''}
                    image={componentData.fields.item2.url ?? '/no-image.jpg'}
                />
                <EditorChoiceItem
                    title={componentData.fields.item3.metadata?.title ?? ''}
                    description={componentData.fields.item3.metadata?.description ?? ''}
                    image={componentData.fields.item3.url ?? '/no-image.jpg'}
                />
            </div>
        </div>
    );
}