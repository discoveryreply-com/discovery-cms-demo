import { DiscoveryContext, DiscoveryComponents, getDiscoveryCms } from '@discoverycms/connector';

export default function Home({ data }) {
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
    const data = await getDiscoveryCms().getPage('horizontalgridpage', context.query);

    return {
        props: {
            data: data,
        },
    };
}
