import { useEffect, useState } from 'react';
import { fetchDiscoveryContentData, fetchDiscoveryContentDataById } from '../fetchDiscoveryData';

function useDiscoveryContent(slug, token) {
  const [data, setData] = useState(null);

  const loadData = async (slug, context) => {
    const res = await fetchDiscoveryContentData(slug, context);
    setData(res);
  };

  useEffect(() => {
    void loadData(slug, {
      token: token,
    });
  }, []);

  return data;
}

function useDiscoveryContentById(discoveryId, token) {
  const [data, setData] = useState(null);

  const loadData = async (discoveryId, context) => {
    const res = await fetchDiscoveryContentDataById(discoveryId, context);
    setData(res);
  };

  useEffect(() => {
    void loadData(discoveryId, {
      token: token,
    });
  }, []);

  return data;
}

export { useDiscoveryContent, useDiscoveryContentById };
