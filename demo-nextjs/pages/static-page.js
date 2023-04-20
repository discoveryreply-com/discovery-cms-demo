import { DiscoveryComponents, DiscoveryContext, getDiscoveryCms } from '@discoverycms/connector';

export default function StaticPage({ data }) {
    return (
        <div className="relative h-4/6">
            <div className="mx-auto mb-24">
                <DiscoveryContext.Provider value={data}>
                    <DiscoveryComponents />
                </DiscoveryContext.Provider>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    // When using SSG, the preview mode is enabled using the /api/preview endpoint.
    // The endpoint sets the preview token in the previewData, which can be used to access preview data
    const data = await getDiscoveryCms().getPage(
        'home',
        {
            ...context.query,
            token: context.previewData?.token
        }
    );

    return {
        props: {
            data: data,
        },
    };
}
