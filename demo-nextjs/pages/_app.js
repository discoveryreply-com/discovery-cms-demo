import '../styles/globals.css';
import PageHeader from '../components/Dynamic/PageHeader';
import PageFooter from '../components/Dynamic/PageFooter';
import { getDiscoveryCms, setupDiscoveryCms } from '@discoverycms/connector';
import Cta from '../components/Dynamic/Cta';
import Cta2 from '../components/Dynamic/Cta2';
import Sample from '../components/Dynamic/Sample';
import EditorChoice from '../components/Dynamic/EditorChoice';
import TopDownload from '../components/Dynamic/TopDownloads';
import Trending from '../components/Dynamic/Trending';
import HorizontalGrid from '../components/Dynamic/HorizontalGrid';
import FullScreenVideo from '../components/Dynamic/FullScreenVideo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MenuHeader from "../components/Dynamic/MenuHeader/MenuHeader";
import MenuHeader2 from "../components/Dynamic/MenuHeader2/MenuHeader";
import WebSiteDescription from "../components/Dynamic/WebSiteDescription";
import ProductList from "../components/Dynamic/ProductList/ProductList";
import ProductDetails from "../components/Dynamic/ProductDetails/ProductDetails";
import CenteredHeadline from "../components/Dynamic/CenteredHeadline/CenteredHeadline";
import VideoPlayer from "../components/Dynamic/VideoPlayer/VideoPlayer";
import Product from "../components/Dynamic/ProductList/Product";

setupDiscoveryCms({
    apiRoot: process.env.NEXT_PUBLIC_DISCOVERY_API_ROOT,
    apiToken: process.env.NEXT_PUBLIC_DISCOVERY_API_TOKEN,
    propertyTitle: process.env.NEXT_PUBLIC_PROPERTY_TITLE,
    components: {
        CTA: Cta,
        CTA2: Cta2,
        Sample: Sample,
        EditorChoice: EditorChoice,
        TopDownloads: TopDownload,
        Trending: Trending,
        HorizontalGrid: HorizontalGrid,
        FullScreenVideo: FullScreenVideo,
        MenuHeader: MenuHeader,
        MenuHeader2: MenuHeader2,
        WebSiteDescription: WebSiteDescription,
        ProductDetails: ProductDetails,
        ProductList: ProductList,
        Product: Product,
        CenteredHeadline: CenteredHeadline,
        VideoPlayer: VideoPlayer
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
            {/* {router.pathname !== '/clean-page' && <PageHeader />} */}
            <>
                <Component {...pageProps} />
                {getDiscoveryCms().isConnectorScriptEnabled() && (
                    <script id="connectorScript" async={true} src={'discovery-cms-connector.js'} data-preview-enabled={router.isPreview} />
                )}
            </>
            {/* {router.pathname !== '/clean-page' && <PageFooter />} */}
        </>
    );
}

export default MyApp;
