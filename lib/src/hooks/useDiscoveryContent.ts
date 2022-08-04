import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryContentsRequestOptions, DiscoveryRequestOptions } from '../types';

function useDiscoveryContents(options: DiscoveryContentsRequestOptions) {
    const [data, setData] = useState(null);

    const loadData = async (options: DiscoveryContentsRequestOptions) => {
        const res = await getDiscoveryCms().getContents(options);
        setData(res);
    };

    useEffect(() => {
        void loadData(options);
    }, []);

    return data;
}

function useDiscoveryContent(slug: string, options: DiscoveryRequestOptions) {
    const [data, setData] = useState(null);

    const loadData = async (slug: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getContent(slug, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(slug, options);
    }, []);

    return data;
}

function useDiscoveryContentById(discoveryId: string, options: DiscoveryRequestOptions) {
    const [data, setData] = useState(null);

    const loadData = async (discoveryId: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getContentById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(discoveryId, options);
    }, []);

    return data;
}

export { useDiscoveryContent, useDiscoveryContents, useDiscoveryContentById };
