import {CHILDREN, RESPONSE_TYPE} from "./constants";

type DiscoveryCmsOptions = {
    apiRoot: string;
    apiToken: string;
    propertyTitle: string;
    components?: object;
    enableConnectorScript?: boolean;
    disableCache?: boolean;
};

type DiscoveryRequestOptions = {
    token?: string;
    children?: typeof CHILDREN.NONE | typeof CHILDREN.SUMMARY | typeof CHILDREN.DETAILS;
    fields?: string;
    key_type?: string;
    disable_cache?: boolean;
    response_type?: typeof RESPONSE_TYPE.SUMMARY | typeof RESPONSE_TYPE.DETAILS;
    cacheTstamp?: number;
    layout?: string;
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
    layout?: any;
}

export type {
    DiscoveryCmsOptions,
    DiscoveryContext,
    DiscoveryComponent,
    DiscoveryRequestOptions,
    DiscoveryContentsRequestOptions,
};
