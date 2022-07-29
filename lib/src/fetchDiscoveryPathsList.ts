import axios from 'axios';
import { DiscoveryRequestOption } from './types';

/**
 * This function can be used in getStaticPaths() to generate a list of paths for a specific content type
 *
 * @param type
 */
async function fetchDiscoveryPathsList(type: string) {
    let url = process.env.NEXT_PUBLIC_API_ROOT + 'content?cmsType=' + type;
    let params: DiscoveryRequestOption = {
        cmsType: type,
    };

    if (process.env.LAST_DEPLOY_TIMESTAMP) {
        params.lastDeployTimestamp = process.env.LAST_DEPLOY_TIMESTAMP;
    }

    params.token = process.env.NEXT_PUBLIC_PUBLIC_TOKEN;

    let contentsResponse = await axios.get(url, { params });

    const contents = contentsResponse.data?.entities ?? [];
    const paths: any = [];

    contents.forEach((content: any) => {
        paths.push({
            params: { slug: content.summary.slug },
        });
    });

    return paths;
}

export { fetchDiscoveryPathsList };
