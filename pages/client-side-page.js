import DiscoveryComponents from '../components/Discovery/DiscoveryComponents';
import DiscoveryContext from '@discovery-frontend/cms-connector/src/DiscoveryContext';
import { useDiscoveryPage } from '@discovery-frontend/cms-connector';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ClientSidePage() {
    const router = useRouter();
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
        if (router.isReady) {
            setQueryParams(router.query);
        }
    }, [router.isReady]);

    let data = useDiscoveryPage('horizontalgridpage', queryParams);

    if (data == null) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="relative h-4/6">
            <div className="mx-auto lg:mt-16 mb-24">
                <DiscoveryContext.Provider value={data}>
                    <DiscoveryComponents />
                </DiscoveryContext.Provider>
            </div>
        </div>
    );
}
