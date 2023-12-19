import {DiscoveryContext, DiscoveryComponents, getDiscoveryCms} from '@discoverycms/connector';

/**
 * Example of static page using the Discovery CMS.
 */

export default function Home({data}) {
    return (
        <div className="relative h-4/6">
            <div className="mx-auto mb-24 max-w-9xl">
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
            token: context.previewData?.token
        }
    );

    return {
        props: {
            data: data,
        },
    };
}
