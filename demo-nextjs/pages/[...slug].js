import { DiscoveryComponents, DiscoveryContext, getDiscoveryCms } from '@discoverycms/connector';

export default function Dynamic({ data }) {
    return (
        <div className="relative h-4/6">
            <div className="max-w-9xl mx-auto lg:mt-16 mb-24">
                <DiscoveryContext.Provider value={data}>
                    <DiscoveryComponents />
                </DiscoveryContext.Provider>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const data = await getDiscoveryCms().getPage(
        context.params.slug.join('/'), 
        {
            ...context.query,
            layout: 'main-layout' // TODO: questo potrebbe essere messo opzionale in configurazione
        }
    );

    return {
        props: {
            data: data,
        },
    };
}
