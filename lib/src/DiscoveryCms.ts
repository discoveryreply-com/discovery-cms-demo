import DiscoveryContext from './DiscoveryContext';
import { fetchDiscoveryData } from './fetchDiscoveryData';
import { DiscoveryCmsOptions, DiscoveryContentsRequestOptions, DiscoveryRequestOptions } from './types';
import {CHILDREN} from "./constants";

const titleTypeSeparator = '/';

export default class DiscoveryCms {
    apiRoot: string;
    apiToken: string;
    propertyTitle: string;
    components: object;
    enableConnectorScript: boolean;
    disableCache: boolean;

    constructor(options: DiscoveryCmsOptions) {
        if (options.apiRoot == null) {
            console.error('The API root must be provided.');
        }

        this.apiRoot = options.apiRoot;

        if (options.apiToken == null) {
            console.error('The API Token must be provided.');
        }

        this.apiToken = options.apiToken;

        if (options.propertyTitle == null) {
            console.error('The Property Title must be provided.');
        }

        this.propertyTitle = options.propertyTitle;

        this.enableConnectorScript = options.enableConnectorScript ?? false;

        this.components = {};

        if (options.components) {
            this.components = options.components;
        }

        this.disableCache = options.disableCache ?? false;
    }

    async getPages() {
        console.error('This methods has not been implemented yet');
    }

    async getPage(slug: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'pages/' + slug;
        let requestOptions = { ...options };

        if (requestOptions.token == null) {
            requestOptions.token = this.apiToken;
        }

        if (requestOptions.children == null) {
            requestOptions.children = CHILDREN.DETAILS;
        }

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }

    async getPageById(discoveryId: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'pages/' + discoveryId;
        let requestOptions = { ...options };

        if (requestOptions.token == null) {
            requestOptions.token = this.apiToken;
        }

        if (requestOptions.children == null) {
            requestOptions.children = CHILDREN.DETAILS;
        }

        requestOptions.key_type = '_id';

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }

    async getContents(options: DiscoveryContentsRequestOptions) {
        let url = this.apiRoot + 'content';
        let requestOptions = { ...options };

        if (requestOptions.children == null) {
            requestOptions.children = CHILDREN.DETAILS;
        }

        if (requestOptions.token == null) {
            requestOptions.token = this.apiToken;
        }

        if (requestOptions.type) {
            requestOptions.type = this.propertyTitle + titleTypeSeparator + requestOptions.type;
        }

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }

    async getContent(slug: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'content/' + slug;
        let requestOptions = { ...options };

        if (requestOptions.token == null) {
            requestOptions.token = this.apiToken;
        }

        if (requestOptions.children == null) {
            requestOptions.children = CHILDREN.DETAILS;
        }

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }

    async getContentById(discoveryId: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'content/' + discoveryId;
        let requestOptions = { ...options };

        if (requestOptions.token == null) {
            requestOptions.token = this.apiToken;
        }

        requestOptions.children = CHILDREN.DETAILS;
        requestOptions.key_type = '_id';

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }

    async getAssets(options: DiscoveryContentsRequestOptions) {
        let url = this.apiRoot + 'assets';
        let requestOptions = { ...options };

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }

    async getAsset(discoveryId: string, options: DiscoveryRequestOptions) {
        let url = this.apiRoot + 'assets/' + discoveryId;
        let requestOptions = { ...options };

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }

    async getTaxonomy(taxonomyName: string, options: DiscoveryRequestOptions = {}) {
        let url = this.apiRoot + 'taxonomies/' + taxonomyName;
        let requestOptions = { ...options };

        if (requestOptions.token == null) {
            requestOptions.token = this.apiToken;
        }

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        return fetchDiscoveryData(url, requestOptions);
    }
    
    async getPathList(options: DiscoveryContentsRequestOptions) {
        let requestOptions = { ...options };

        if (requestOptions.token == null) {
            requestOptions.token = this.apiToken;
        }

        if (requestOptions.type) {
            requestOptions.type = this.propertyTitle + titleTypeSeparator + requestOptions.type;
        }

        if (this.disableCache) {
            requestOptions.cacheTstamp = new Date().getTime();
            requestOptions.disable_cache = true;
        }

        let contents = await this.getContents(requestOptions);

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

    getPropertyNameForComponents() {
        return this.propertyTitle + titleTypeSeparator;
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

    isConnectorScriptEnabled() {
        return this.enableConnectorScript;
    }
}
