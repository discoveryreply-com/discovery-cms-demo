import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryRequestOption } from '../types';

function useDiscoveryContent(slug: string, options: DiscoveryRequestOption) {
    const [data, setData] = useState(null);

    const loadData = async (slug: string, options: DiscoveryRequestOption) => {
        const res = await getDiscoveryCms().getContent(slug, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(slug, options);
    }, []);

    return data;
}

function useDiscoveryContentById(discoveryId: string, options: DiscoveryRequestOption) {
    const [data, setData] = useState(null);

    const loadData = async (discoveryId: string, options: DiscoveryRequestOption) => {
        const res = await getDiscoveryCms().getContentById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(discoveryId, options);
    }, []);

    return data;
}

export { useDiscoveryContent, useDiscoveryContentById };
