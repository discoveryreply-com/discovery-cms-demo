import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryRequestOptions } from '../types';
import { defaultErrorCallback } from './defaultErrorCallback';

function useDiscoveryPage(
    slug: string,
    options: DiscoveryRequestOptions = {},
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (slug: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getPage(slug, options);
        setData(res);
    };

    useEffect(() => {
        loadData(slug, options).catch((error) => callback(error));
    }, [slug, optionsString]);

    return data;
}

function useDiscoveryPageById(
    discoveryId: string,
    options: DiscoveryRequestOptions = {},
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (discoveryId: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getPageById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        loadData(discoveryId, options).catch((error) => callback(error));
    }, [discoveryId, optionsString]);

    return data;
}

export { useDiscoveryPage, useDiscoveryPageById };
