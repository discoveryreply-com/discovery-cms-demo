import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryContentsRequestOptions, DiscoveryRequestOptions } from '../types';
import { defaultErrorCallback } from './defaultErrorCallback';

function useDiscoveryContents(
    options: DiscoveryContentsRequestOptions,
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (options: DiscoveryContentsRequestOptions) => {
        const res = await getDiscoveryCms().getContents(options);
        setData(res);
    };

    useEffect(() => {
        loadData(options).catch((error) => callback(error));
    }, [optionsString]);

    return data;
}

function useDiscoveryContent(
    slug: string,
    options: DiscoveryRequestOptions = {},
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (slug: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getContent(slug, options);
        setData(res);
    };

    useEffect(() => {
        loadData(slug, options).catch((error) => callback(error));
    }, [slug, optionsString]);

    return data;
}

function useDiscoveryContentById(
    discoveryId: string,
    options: DiscoveryRequestOptions = {},
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (discoveryId: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getContentById(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        loadData(discoveryId, options).catch((error) => callback(error));
    }, [discoveryId, optionsString]);

    return data;
}

export { useDiscoveryContent, useDiscoveryContents, useDiscoveryContentById };
