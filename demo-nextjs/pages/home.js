import { DiscoveryContext, DiscoveryComponents, getDiscoveryCms } from '@discoverycms/connector';
import Layout from '../components/layout';

export default function Home({ preview, data }) {
    return (
        <Layout preview={preview}>
            <div className="relative h-4/6">
                <div className="mx-auto mb-24 max-w-9xl lg:mt-16">
                    <DiscoveryContext.Provider value={data}>
                        <DiscoveryComponents />
                    </DiscoveryContext.Provider>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const data = await getDiscoveryCms().getPage('home', context.query);

    return {
        props: {
            preview: context.preview || false,
            data: data,
        },
    };
}
