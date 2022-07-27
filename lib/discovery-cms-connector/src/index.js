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

export {
    DiscoveryContext,
    fetchDiscoveryData,
    fetchDiscoveryDataById,
    fetchDiscoveryPathsList,
    useComponentData,
    useDiscoveryContent,
    useDiscoveryContentById,
    useDiscoveryPage,
    useDiscoveryPageById,
};

export { getDiscoveryCms, setupDiscoveryCms } from './DiscoveryCms';
