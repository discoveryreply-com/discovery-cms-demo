export default function Cta({ componentId }) {
    //const componentData = useComponentData(componentId, DiscoveryContext);
    //console.log(componentData)

    //if (componentData === undefined) {
    //return <span>Loading..</span>
    //}

    var componentData = {
        fields: {
            headline: 'prova',
            body: 'prova body',
            links: [
                {
                    url: 'prova',
                    label: 'prova',
                },
            ],
            image: {
                url: 'https://dc8ccz5qcwwyb.cloudfront.net/media-staging/25/89/0325aa07-44b1-493d-9691-da64aa96477a/94c780fa-63a8-445f-b0fb-4491ee4c0416.jpg',
            },
        },
    };
    return (
        <div data-discovery-id={componentId} className="mt-[4rem]">
            <div className="flex pb-16 w-full">
                <div className="max-w-7xl mx-auto lg:mt-16 mb-24">
                    <div className="relative z-0 pt-10 pb-8 bg-bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-24 xl:pb-24 m-10 sm:ml-10">
                        <main className="max-w-7xl ">
                            <div className="text-center lg:text-left mt-16">
                                <h1 className="tracking-tight font-bold text-5xl md:text-6xl">
                                    <span className="block text-blue-800 w-50">
                                        {componentData.fields.headline ?? ''}{' '}
                                    </span>
                                </h1>
                                <p
                                    className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                    dangerouslySetInnerHTML={{ __html: componentData.fields.body ?? '' }}
                                ></p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="">
                                        <div className="w-full flex items-center justify-center px-32 py-4 border border-transparent rounded-xl text-white bg-blue-600 hover:bg-blue-700 text-2xl">
                                            {componentData.fields.links[0].label ?? ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                <div className="hidden lg:block lg:inset-y-0 lg:right-0 lg:w-2/5 lg:p-10 mt-16">
                    <img
                        className="object-cover rounded-lg shadow-xl hover:shadow-2xl"
                        src={componentData.fields.image.url ?? '/no-image.jpg'}
                        alt=""
                        style={{ width: '500px', height: '500px' }}
                    />
                </div>
            </div>
        </div>
    );
}
