import {
  useComponentData,
  useDiscoveryContent,
  useDiscoveryContentById,
  useDiscoveryPage,
  useDiscoveryPageById,
} from './hooks/index';

import DiscoveryContext from './DiscoveryContext';

import {
  fetchDiscoveryData,
  fetchDiscoveryDataById,
  fetchDiscoveryContentData,
  fetchDiscoveryPageData,
  fetchDiscoveryContentDataById,
  fetchDiscoveryPageDataById,
} from './fetchDiscoveryData';

import { fetchDiscoveryPathsList } from './fetchDiscoveryPathsList';

export {
  DiscoveryContext,
  fetchDiscoveryData,
  fetchDiscoveryDataById,
  fetchDiscoveryContentData,
  fetchDiscoveryPageData,
  fetchDiscoveryContentDataById,
  fetchDiscoveryPageDataById,
  fetchDiscoveryPathsList,
  useComponentData,
  useDiscoveryContent,
  useDiscoveryContentById,
  useDiscoveryPage,
  useDiscoveryPageById,
};
