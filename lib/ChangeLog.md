Connector Changelog
===================

--- HEAD

-- v1.3.0

* [2024-12-20] added an optional `authToken` to the `DiscoveryRequestOptions`. This
  authToken is passed to the API for authentication. It can be, for example, an AWS
  Cognito token.

-- v1.1.0

* [2023-12-15] added `usePalette()` to retrieve the page palette on the layout page or, if missing, on the current page.

* [2023-12-15] added `usePageData()` to retrieve the whole API response from a component.

* [2023-12-14] added `useLayoutComponentData()` to retrieve a component nested in a page layout

--- V1.0.0

* [2023-04-18] modified discovery-cms-connector.js and added the nextjs api files to enable and disable the preview mode.

* [2023-03-06] added `DiscoveryCms.getAsset()/getAssets()` method and `useDiscoveryAsset()/useDiscoveryAssets()` hooks.

* [2023-02-22] added `DiscoveryCms.getTaxonomy()` method and `useDiscoveryTaxonomy()` hook.