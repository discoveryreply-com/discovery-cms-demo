import { useEffect, useState } from 'react';
import { fetchDiscoveryPageData, fetchDiscoveryPageDataById } from '../fetchDiscoveryData';

function useDiscoveryPage(slug, token) {
  const [data, setData] = useState(null);

  const loadData = async (slug, context) => {
    const res = await fetchDiscoveryPageData(slug, context);
    setData(res);
  };

  useEffect(() => {
    void loadData(slug, {
      token: token,
    });
  }, []);

  return data;
}

function useDiscoveryPageById(discoveryId, token) {
  const [data, setData] = useState(null);

  const loadData = async (discoveryId, context) => {
    const res = await fetchDiscoveryPageDataById(discoveryId, context);
    setData(res);
  };

  useEffect(() => {
    void loadData(discoveryId, {
      token: token,
    });
  }, []);

  return data;
}

export { useDiscoveryPage, useDiscoveryPageById };
