import { useComponentData } from '@discoverycms/connector';
import TopDownloadItem from './TopDownloadItem';

export default function TopDownload({ componentId }) {
    const componentData = useComponentData(componentId);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }

    return (
        <div data-discovery-id={componentId}>
            <div className="text-blue-900 font-semibold text-3xl mb-10 flex justify-center mt-20 ">
                {componentData.headline ?? ''}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center place-content-center mr-2 ml-2 md:mr-20 md:ml-20 mb-20">
                <TopDownloadItem
                    title="Colorful socks"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/27/91/f22b83f0-6014-4868-960b-158f0dbb44f4/02a9db64-ff4d-4a9d-bb2a-71dda6dedbe8.jpg"
                />
                <TopDownloadItem
                    title="Black boots"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/3/3/8c252bab-fa68-4b0b-998e-c302d662c3a0/8bfe1b19-cc33-4146-b423-f485d1ce8b47.jpg"
                />
                <TopDownloadItem
                    title="Pastel color sneakers"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/17/81/d986363f-c313-40d2-bd6c-d421d4072ba4/6a40c1ad-4b16-45a3-86a5-98f5092838ca.jpg"
                />
                <TopDownloadItem
                    title="Gold jewelry"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/5/5/67827420-8ea3-4fb8-8c11-aeeae3c93438/bb959833-fd77-4cb9-8e99-9b7d69b41f38.jpg"
                />
                <TopDownloadItem
                    title="Checked socks"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/4/4/84f163cb-29dc-432b-be9d-62a0e12b465a/6261df8b-e40d-4d78-a8e9-64e99e03cc96.jpg"
                />
                <TopDownloadItem
                    title="Black boots"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/23/87/3a7072d4-da04-4ce8-868a-21675286375a/9feec2ac-cda7-49cf-9a60-905e1e0ae212.jpg"
                />
                <TopDownloadItem
                    title="White T-shirt"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/29/93/432c1d5f-f7a1-4923-866d-f12b7473fff5/5ee87bfa-43a4-4d49-b145-d0e97143fee5.jpg"
                />
                <TopDownloadItem
                    title="Red Sneakers"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/27/91/85f7c3e8-7b53-4a81-b0d5-b7a71cefdb2f/3ef61b62-485d-48f7-92da-3d1d7e9193a5.jpg"
                />
                <TopDownloadItem
                    title="Modern jewelry"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/22/86/73e186a6-f4ab-401a-94dd-a5aa72cd1435/c6b532df-ab23-4c86-a7bb-fb2ec3fca9ca.jpg"
                />
                <TopDownloadItem
                    title="Shoulder bag"
                    image="https://dc8ccz5qcwwyb.cloudfront.net/media/22/86/7af1fe0d-d77e-4466-8b1d-336d444ebe38/d5734f3c-f48e-4400-b8bf-bce09607a7a5.jpg"
                />
            </div>
        </div>
    );
}
