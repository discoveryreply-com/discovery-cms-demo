type DiscoveryCmsOptions = {
    apiRoot: string;
    apiToken: string;
    propertyTitle: string;
    components?: object;
    enableConnectorScript?: boolean;
    previewMode?: boolean;
};

type DiscoveryRequestOptions = {
    token?: string;
    children?: 'none' | 'summary' | 'details';
    fields?: string;
    key_type?: string;
    disable_cache?: boolean;
    response_type?: 'summary' | 'details';
    cacheTstamp?: number;
};

type DiscoveryContentsRequestOptions = DiscoveryRequestOptions & {
    type: string;
    start?: number;
    limit?: number;
    sort?: string;
    filters?: object;
    last_deploy_timestamp?: string;
    fq?: string[];
};

type DiscoveryComponent = {
    _id: string;
    _type: string;
    _parent?: string;
};

interface DiscoveryContext {
    _id: string;
    components: Array<DiscoveryComponent>;
    details?: any;
}

export type {
    DiscoveryCmsOptions,
    DiscoveryContext,
    DiscoveryComponent,
    DiscoveryRequestOptions,
    DiscoveryContentsRequestOptions,
};
