import { DiscoveryComponents, DiscoveryContext, getDiscoveryCms } from '@discoverycms/connector';

export default function ServerSidePage({ data }) {
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

export async function getServerSideProps(context) {
    const data = await getDiscoveryCms().getPage('home', context.query);

    return {
        props: {
            data: data,
        },
    };
}
