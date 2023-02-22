import { useEffect, useState } from 'react';
import { getDiscoveryCms } from '../setup';
import { DiscoveryContentsRequestOptions, DiscoveryRequestOptions } from '../types';
import { defaultErrorCallback } from './defaultErrorCallback';

function useDiscoveryTaxonomy(
    taxonomyName: string,
    options: DiscoveryRequestOptions = {},
    callback: (error: any) => void = defaultErrorCallback,
) {
    const [data, setData] = useState(null);
    const optionsString = JSON.stringify(options);

    const loadData = async (taxonomyName: string, options: DiscoveryRequestOptions) => {
        const res = await getDiscoveryCms().getTaxonomy(taxonomyName, options);
        setData(res);
    };

    useEffect(() => {
        loadData(taxonomyName, options).catch((error) => callback(error));
    }, [taxonomyName, optionsString]);

    return data;
}


export { useDiscoveryTaxonomy };
