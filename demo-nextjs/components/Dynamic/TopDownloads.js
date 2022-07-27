import TopDownloadItem from './TopDownloadItem';
import { DiscoveryContext, useComponentData } from '@discoverycms/connector';

export default function TopDownload({ componentId }) {
    const componentData = useComponentData(componentId, DiscoveryContext);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    return (
        <div data-discovery-id={componentId}>
            <div className="text-blue-900 font-semibold text-3xl mb-10 flex justify-center mt-20 ">
                {componentData.headline ?? ''}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center place-content-center mr-2 ml-2 md:mr-20 md:ml-20 mb-20">
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
                <TopDownloadItem title="Colorful socks" image="image_url_to_be_added" />
            </div>
        </div>
    );
}
