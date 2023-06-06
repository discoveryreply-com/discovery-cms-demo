import {DiscoveryContext, DiscoveryComponents, getDiscoveryCms} from '@discoverycms/connector';
export default function ProductDescriptionPage({data}) {
    return (
        <DiscoveryContext.Provider value={data}>
            <DiscoveryComponents />
        </DiscoveryContext.Provider>
    )
}

export async function getStaticProps(context) {
    let data;

    try {
        data = await getDiscoveryCms().getPage(
            'demo-clean-page',
            {
                token: context.previewData?.token
            }
        );
    } catch (e) {
        data = {
            components: []
        }
    }

    return {
        props: {
            data
        }
    }
}