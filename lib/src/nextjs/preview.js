import {getDiscoveryCms, setupDiscoveryCms} from "@discoverycms/connector";

// The connector must be setup in the api so that it can be used in the preview endpont.
// However, note that only required attributes are needed here.
setupDiscoveryCms({
    apiRoot: '', //TODO: CHANGE
    apiToken: '', //TODO: CHANGE
    propertyTitle: '', //TODO: CHANGE
});


export default async function handler(req, res) {
    const secret = req.query.secret;

    if (process.env.DISCOVERY_PREVIEW_TOKEN == null || process.env.DISCOVERY_PREVIEW_TOKEN !== secret) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const slug = req.query.slug;
    let path = req.query.path ?? slug;

    if (slug == null || secret == null) {
        return res.status(400).json({ message: 'Bad request' })
    }

    // Security check for a valid slug
    const page = await getDiscoveryCms().getPage(slug, {token: secret})

    if (!page) {
        const content = await getDiscoveryCms().getContent(slug, {token: secret});

        if (!content) {
            return res.status(400).json({ message: 'Invalid slug' })
        }
    }

    res.setPreviewData(
        { token: process.env.DISCOVERY_PREVIEW_TOKEN },
        { maxAge: 60 * 60 * 2 } // 2 hours
    )

    // When using the slug, we should add a leading / so that the redirect starts from the origin and not from /api
    if (!path.startsWith('/')) {
        path = '/' + path;
    }

    res.writeHead(307, { Location: path })
    res.end()
}