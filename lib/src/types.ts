type DiscoveryCmsOptions = {
    apiRoot: string;
    apiToken: string;
    components?: object;
};

type DiscoveryRequestOption = {
    token?: string;
    children?: 'none' | 'summary' | 'details';
    fields?: string;
    cmsType?: string;
    lastDeployTimestamp?: string;
    keyType?: string;
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

export type { DiscoveryCmsOptions, DiscoveryContext, DiscoveryComponent, DiscoveryRequestOption };
