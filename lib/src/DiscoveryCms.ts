import DiscoveryContext from './DiscoveryContext';
import { fetchDiscoveryData, fetchDiscoveryDataById } from './fetchDiscoveryData';
import { DiscoveryCmsOptions, DiscoveryRequestOption } from './types';

export default class DiscoveryCms {
    apiRoot: string;
    apiToken: string;
    components: object;

    constructor(options: DiscoveryCmsOptions) {
        this.apiRoot = options.apiRoot;
        this.apiToken = options.apiToken;
        this.components = {};

        if (options.components) {
            this.components = options.components;
        }
    }

    async getPage(slug: string, options: DiscoveryRequestOption = {}) {
        let url = this.apiRoot + 'pages/' + slug;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryData(url, options);
    }

    async getPageById(discoveryId: string, options: DiscoveryRequestOption = {}) {
        let url = this.apiRoot + 'pages/' + discoveryId;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryDataById(url, options);
    }

    async getContent(slug: string, options: DiscoveryRequestOption = {}) {
        let url = this.apiRoot + 'content/' + slug;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryData(url, options);
    }

    async getContentById(discoveryId: string, options: DiscoveryRequestOption = {}) {
        let url = this.apiRoot + 'content/' + discoveryId;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryDataById(url, options);
    }

    getContext() {
        return DiscoveryContext;
    }

    getComponents() {
        return this.components;
    }

    getToken() {
        return this.apiToken;
    }
}
