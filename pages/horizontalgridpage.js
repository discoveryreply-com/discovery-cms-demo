import { DiscoveryContext, fetchDiscoveryPageData } from '@discovery-frontend/cms-connector';
import DiscoveryComponents from '../components/Discovery/DiscoveryComponents';

export default function Home({ data }) {
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
    if (context.query.token) {
        context.token = context.query.token;
    }

    const data = await fetchDiscoveryPageData('horizontalgridpage', context);

    return {
        props: {
            data: data,
        },
    };
}
