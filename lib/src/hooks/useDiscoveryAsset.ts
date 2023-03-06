import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryContentsRequestOptions, DiscoveryRequestOptions } from '../types';
import { defaultErrorCallback } from './defaultErrorCallback';


function useDiscoveryAssets(
    options: DiscoveryContentsRequestOptions,
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (options: DiscoveryContentsRequestOptions) => {
        const res = await getDiscoveryCms().getAssets(options);
        setData(res);
    };

    useEffect(() => {
        loadData(options).catch((error) => callback(error));
    }, [optionsString]);

    return data;
}

function useDiscoveryAsset(
    discoveryId: string,
    options: DiscoveryContentsRequestOptions,
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (discoveryId: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getAsset(discoveryId, options);
        setData(res);
    };

    useEffect(() => {
        loadData(discoveryId, options).catch((error) => callback(error));
    }, [discoveryId, optionsString]);

    return data;
}

export { useDiscoveryAssets, useDiscoveryAsset };
