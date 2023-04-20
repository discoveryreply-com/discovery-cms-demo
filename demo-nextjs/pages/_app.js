import '../styles/globals.css';
import PageHeader from '../components/Dynamic/PageHeader';
import PageFooter from '../components/Dynamic/PageFooter';
import { getDiscoveryCms, setupDiscoveryCms } from '@discoverycms/connector';
import Cta from '../components/Dynamic/Cta';
import Sample from '../components/Dynamic/Sample';
import EditorChoice from '../components/Dynamic/EditorChoice';
import TopDownload from '../components/Dynamic/TopDownloads';
import Trending from '../components/Dynamic/Trending';
import HorizontalGrid from '../components/Dynamic/HorizontalGrid';
import FullScreenVideo from '../components/Dynamic/FullScreenVideo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PreviewModeAlert from '../components/PreviewModeAlert';

setupDiscoveryCms({
    apiRoot: process.env.NEXT_PUBLIC_DISCOVERY_API_ROOT,
    apiToken: process.env.NEXT_PUBLIC_DISCOVERY_API_TOKEN,
    propertyTitle: process.env.NEXT_PUBLIC_PROPERTY_TITLE,
    components: {
        CTA: Cta,
        Sample: Sample,
        EditorChoice: EditorChoice,
        TopDownloads: TopDownload,
        Trending: Trending,
        HorizontalGrid: HorizontalGrid,
        FullScreenVideo: FullScreenVideo,
    },
    enableConnectorScript: true,
    disableCache: true,
});

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" />
                <title>Discovery NextJS Demo</title>
            </Head>
            <>
                {router.isPreview && (
                    // The PreviewModeAlert shows a prompt warning the user of the active preview mode
                    <PreviewModeAlert />
                )}
                <Component {...pageProps} />
                {getDiscoveryCms().isConnectorScriptEnabled() && (
                    <script id="connectorScript" async={true} src={'/discovery-cms-connector.js'} data-preview-enabled={router.isPreview} />
                )}
            </>
            <PageFooter />
        </>
    );
}

export default MyApp;
