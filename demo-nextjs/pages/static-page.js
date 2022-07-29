import { DiscoveryComponents, DiscoveryContext, getDiscoveryCms } from '@discoverycms/connector';

export default function StaticPage({ data }) {
    return (
        <div className="relative h-4/6">
            <div className="mx-auto lg:mt-16 mb-24">
                <DiscoveryContext.Provider value={data}>
                    <DiscoveryComponents />
                </DiscoveryContext.Provider>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const data = await getDiscoveryCms().getPage('horizontalgridpage');

    return {
        props: {
            data: data,
        },
    };
}
