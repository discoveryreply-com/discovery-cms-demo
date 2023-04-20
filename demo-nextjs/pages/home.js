import {DiscoveryContext, DiscoveryComponents, getDiscoveryCms} from '@discoverycms/connector';

export default function Home({data}) {
    return (
        <div className="relative h-4/6">
            <div className="max-w-9xl mx-auto mb-24">
                <DiscoveryContext.Provider value={data}>
                    <DiscoveryComponents />
                </DiscoveryContext.Provider>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const data = await getDiscoveryCms().getPage(
        'home',
        {
            ...context.query,
            token: context.previewData?.token ?? null
        }
    );

    return {
        props: {
            data: data,
        },
    };
}
