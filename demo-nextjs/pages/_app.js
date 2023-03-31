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

setupDiscoveryCms({
    apiRoot: 'http://[::1]:8081/api/v1/',
    apiToken: '1',
    propertyTitle: 'Discovery',
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
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" />
                <title>Discovery NextJS Demo</title>
            </Head>
            <PageHeader />
            <div className="mt-16">
                <Component {...pageProps} />
                {getDiscoveryCms().isConnectorScriptEnabled() && (
                    <script id="connectorScript" async={true} src={'discovery-cms-connector.js'} />
                )}
            </div>
            <PageFooter />
        </>
    );
}

export default MyApp;
