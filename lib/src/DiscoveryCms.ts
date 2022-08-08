import DiscoveryContext from './DiscoveryContext';
import { fetchDiscoveryData, fetchDiscoveryDataById } from './fetchDiscoveryData';
import { DiscoveryCmsOptions, DiscoveryContentsRequestOptions, DiscoveryRequestOptions } from './types';

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

    async getPages() {
        console.error('This methods has not been implemented yet');
    }

    async getPage(slug: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'pages/' + slug;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryData(url, options);
    }

    async getPageById(discoveryId: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'pages/' + discoveryId;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryDataById(url, options);
    }

    async getContents(options: DiscoveryContentsRequestOptions) {
        let url = this.apiRoot + 'content';

        if (options.token == null) {
            options.token = this.apiToken;
        }

        return fetchDiscoveryData(url, options);
    }

    async getContent(slug: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'content/' + slug;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryData(url, options);
    }

    async getContentById(discoveryId: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'content/' + discoveryId;

        if (options.token == null) {
            options.token = this.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryDataById(url, options);
    }

    async getPathList(options: DiscoveryContentsRequestOptions) {
        let contents = await this.getContents(options);

        contents = contents.entities ?? [];

        return contents.map((content: any) => ({
            slug: content.slug,
        }));
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

    getFiltersFromQueryParams(queryParams: any) {
        const filters: any = {};

        for (let [key, value] of Object.entries(queryParams)) {
            if (key.includes('filter_')) {
                const fieldName = key.replace('filter_', '');
                filters[fieldName] = value;
            }
        }

        return filters;
    }
}
