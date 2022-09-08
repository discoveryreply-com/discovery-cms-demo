import TrendingItem from './TrendingItem';
import { useComponentData } from '@discoverycms/connector';

export default function Trending({ componentId }) {
    const componentData = useComponentData(componentId);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    return (
        <div className="bg-white py-12" data-discovery-id={componentId}>
            <div className="text-blue-900 font-semibold text-4xl mb-12 flex justify-center">
                {componentData.headline ?? ''}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center place-content-center md:mr-20 md:ml-20 mb-20">
                <TrendingItem
                    title="Autumn Fashion"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/6/6/effd933b-fdf4-4fa7-a6d0-563a43da4a33/e298aaa3-8bcb-4049-90bf-c7db6282dc90.jpg"
                />
                <TrendingItem
                    title="Colorful sweaters"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/25/89/cbebc2c4-8667-49a7-8fb4-86279ac4e745/3c1fc803-dad1-4498-89e9-428567fc35b4.jpg"
                />
                <TrendingItem
                    title="Checked socks"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/4/4/84f163cb-29dc-432b-be9d-62a0e12b465a/6261df8b-e40d-4d78-a8e9-64e99e03cc96.jpg"
                />
                <TrendingItem
                    title="Modern jewelry"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/22/86/73e186a6-f4ab-401a-94dd-a5aa72cd1435/c6b532df-ab23-4c86-a7bb-fb2ec3fca9ca.jpg"
                />
                <TrendingItem
                    title="Colorful socks"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/27/91/f22b83f0-6014-4868-960b-158f0dbb44f4/02a9db64-ff4d-4a9d-bb2a-71dda6dedbe8.jpg"
                />
                <TrendingItem
                    title="Winter Fashion"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/10/10/2238f08a-5519-4b1a-812a-37fd31e5c577/4c006f11-e81f-412f-8572-1777104e70ea.jpg"
                />
            </div>
        </div>
    );
}
