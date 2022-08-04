import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryRequestOptions } from '../types';

function useDiscoveryPage(slug: string, options: DiscoveryRequestOptions) {
    const [data, setData] = useState(null);

    const loadData = async (slug: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getPage(slug, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(slug, options);
    }, []);

    return data;
}

function useDiscoveryPageById(discoveryId: string, options: DiscoveryRequestOptions) {
    const [data, setData] = useState(null);

    const loadData = async (discoveryId: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getPageById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(discoveryId, options);
    }, []);

    return data;
}

export { useDiscoveryPage, useDiscoveryPageById };
