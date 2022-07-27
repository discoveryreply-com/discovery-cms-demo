import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../DiscoveryCms';

function useDiscoveryPage(slug, options) {
    const [data, setData] = useState(null);

    const loadData = async (slug, options) => {
        const res = await getDiscoveryCms().getPage(slug, options);
        setData(res);
    };

    useEffect(() => {
        void loadData(slug, options);
    }, []);

    return data;
}

function useDiscoveryPageById(discoveryId, options) {
    const [data, setData] = useState(null);

    const loadData = async (discoveryId, options) => {
        const res = await getDiscoveryCms().getPageById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        if (router.isReady) {
            void loadData(discoveryId, options);
        }
    }, []);

    return data;
}

export { useDiscoveryPage, useDiscoveryPageById };
