import EditorChoiceItem from './EditorsChoiceItem';
import { DiscoveryContext, useComponentData } from '@discoverycms/connector';

export default function EditorChoice({ componentId }) {
    const componentData = useComponentData(componentId, DiscoveryContext);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }

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
