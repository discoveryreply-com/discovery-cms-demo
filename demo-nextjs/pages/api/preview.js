import {getDiscoveryCms, setupDiscoveryCms} from "@discoverycms/connector";
import Cta from "../../components/Dynamic/Cta";
import Sample from "../../components/Dynamic/Sample";
import EditorChoice from "../../components/Dynamic/EditorChoice";
import TopDownload from "../../components/Dynamic/TopDownloads";
import Trending from "../../components/Dynamic/Trending";
import HorizontalGrid from "../../components/Dynamic/HorizontalGrid";
import FullScreenVideo from "../../components/Dynamic/FullScreenVideo";

// The connector must be setup in the api so that it can be used in the preview endpont.
// However, note that only required attributes are needed here.
setupDiscoveryCms({
    apiRoot: 'http://[::1]:8081/api',
    apiToken: '1',
    propertyTitle: 'Discovery',
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
    const page = await getDiscoveryCms().getPage(slug)

    if (!page) {
        const content = await getDiscoveryCms().getContent(slug);

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