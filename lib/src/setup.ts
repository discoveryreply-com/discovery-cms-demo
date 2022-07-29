import DiscoveryCms from './DiscoveryCms';
import { DiscoveryCmsOptions } from './types';

let discoveryApi: DiscoveryCms;

const useDiscoveryCms = () => {
    if (!discoveryApi) {
        console.error('The Discovery CMS has not be initialized. Call setupDiscoveryConnector()');
    }

    return discoveryApi;
};

export { useDiscoveryCms as getDiscoveryCms };

export const setupDiscoveryCms = (options: DiscoveryCmsOptions) => {
    discoveryApi = new DiscoveryCms(options);
};
