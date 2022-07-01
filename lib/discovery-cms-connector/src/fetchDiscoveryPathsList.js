import axios from "axios";

/**
 * This function can be used in getStaticPaths() to generate a list of paths for a specific content type
 *
 * @param type
 */
async function fetchDiscoveryPathsList(type) {
  let url = process.env.NEXT_PUBLIC_API_ROOT + "content?cmsType=" + type;

  if (process.env.LAST_DEPLOY_TIMESTAMP) {
    url += "&lastDeployTimestamp=" + process.env.LAST_DEPLOY_TIMESTAMP;
  }

  url += "&token=" + process.env.NEXT_PUBLIC_PUBLIC_TOKEN;

  let contents = await axios.get(url);

  contents = contents.data?.entities;
  const paths = [];

  contents.forEach((content) => {
    paths.push({
      params: { slug: content.summary.slug },
    });
  });

  return paths;
}

export { fetchDiscoveryPathsList };
