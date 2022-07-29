import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryRequestOption } from '../types';

function useDiscoveryPage(slug: string, options: DiscoveryRequestOption) {
    const [data, setData] = useState(null);

    const loadData = async (slug: string, options: DiscoveryRequestOption) => {
        const res = await getDiscoveryCms().getPage(slug, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(slug, options);
    }, []);

    return data;
}

function useDiscoveryPageById(discoveryId: string, options: DiscoveryRequestOption) {
    const [data, setData] = useState(null);

    const loadData = async (discoveryId: string, options: DiscoveryRequestOption) => {
        const res = await getDiscoveryCms().getPageById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(discoveryId, options);
    }, []);

    return data;
}

export { useDiscoveryPage, useDiscoveryPageById };
