import { DiscoveryContext, DiscoveryComponents, getDiscoveryCms } from '@discoverycms/connector';

export default function Pizzeria({ data }) {
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
        'pizzeria', 
        {
            ...context.query,
            layout: 'main-layout'
        }
    );
    return {
        props: {
            data: data,
        },
    };
}