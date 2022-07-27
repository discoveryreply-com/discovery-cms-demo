import { DiscoveryComponents, DiscoveryContext, useDiscoveryPage } from '@discoverycms/connector';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
    const [params] = useSearchParams();
    const apiOptions = {};

    for (let queryParam of params.entries()) {
        const key = queryParam[0];
        apiOptions[key] = queryParam[1];
    }

    const data = useDiscoveryPage('horizontalgridpage', apiOptions) ?? {};

    return (
        <div className="h-4/6">
            <div className="max-w-9xl mx-auto lg:mt-16 mb-24">
                <DiscoveryContext.Provider value={data}>
                    <DiscoveryComponents />
                </DiscoveryContext.Provider>
            </div>
        </div>
    );
}
