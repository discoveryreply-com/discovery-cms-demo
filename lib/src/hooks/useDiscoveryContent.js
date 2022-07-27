import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../DiscoveryCms';

function useDiscoveryContent(slug, options) {
    const [data, setData] = useState(null);

    const loadData = async (slug, options) => {
        const res = await getDiscoveryCms().getContent(slug, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(slug, options);
    }, []);

    return data;
}

function useDiscoveryContentById(discoveryId, options) {
    const [data, setData] = useState(null);

    const loadData = async (discoveryId, options) => {
        const res = await getDiscoveryCms().getContentById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(discoveryId, options);
    }, []);

    return data;
}

export { useDiscoveryContent, useDiscoveryContentById };
