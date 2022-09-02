import {
    useComponentData,
    useDiscoveryContent,
    useDiscoveryContents,
    useDiscoveryContentById,
    useDiscoveryPage,
    useDiscoveryPageById,
} from './hooks/index';
import { fetchDiscoveryData } from './fetchDiscoveryData';
import DiscoveryContext from './DiscoveryContext';
import { getDiscoveryCms, setupDiscoveryCms } from './setup';
import { DiscoveryComponent, DiscoveryComponents, UndefinedComponent } from './components/index';

export {
    DiscoveryComponent,
    DiscoveryComponents,
    DiscoveryContext,
    fetchDiscoveryData,
    getDiscoveryCms,
    setupDiscoveryCms,
    UndefinedComponent,
    useComponentData,
    useDiscoveryContent,
    useDiscoveryContents,
    useDiscoveryContentById,
    useDiscoveryPage,
    useDiscoveryPageById,
};
