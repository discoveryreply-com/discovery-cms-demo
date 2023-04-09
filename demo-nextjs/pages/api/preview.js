// From https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/pages/api/preview.js

export default async function handler(req, res) {

// console.log('preview', req.query);
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.DISCOVERY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  /*
  const page = await getDiscoveryCms().getPage(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' })
  }
  */

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched page
  res.writeHead(307, { Location: `/${req.query.slug}` })
  res.end()
}