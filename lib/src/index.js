import {
    useComponentData,
    useDiscoveryContent,
    useDiscoveryContentById,
    useDiscoveryPage,
    useDiscoveryPageById,
} from './hooks/index';
import { fetchDiscoveryData, fetchDiscoveryDataById } from './fetchDiscoveryData';
import { fetchDiscoveryPathsList } from './fetchDiscoveryPathsList';
import DiscoveryContext from './DiscoveryContext';
import {getDiscoveryCms, setupDiscoveryCms } from './DiscoveryCms';

export {
    DiscoveryContext,
    fetchDiscoveryData,
    fetchDiscoveryDataById,
    fetchDiscoveryPathsList,
    getDiscoveryCms,
    setupDiscoveryCms,
    useComponentData,
    useDiscoveryContent,
    useDiscoveryContentById,
    useDiscoveryPage,
    useDiscoveryPageById,
};

