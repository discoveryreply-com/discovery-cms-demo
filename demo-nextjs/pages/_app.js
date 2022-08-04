import '../styles/globals.css';
import PageHeader from '../components/Dynamic/PageHeader';
import PageFooter from '../components/Dynamic/PageFooter';
import { setupDiscoveryCms } from '@discoverycms/connector';
import Cta from '../components/Dynamic/Cta';
import Sample from '../components/Dynamic/Sample';
import EditorChoice from '../components/Dynamic/EditorChoice';
import TopDownload from '../components/Dynamic/TopDownloads';
import Trending from '../components/Dynamic/Trending';
import HorizontalGrid from '../components/Dynamic/HorizontalGrid';
import Video from "../components/Dynamic/Video";

setupDiscoveryCms({
    apiRoot: 'http://[::1]:8081/api/v1/',
    apiToken: '1',
    components: {
        CTA: Cta,
        Sample: Sample,
        EditorChoice: EditorChoice,
        TopDownloads: TopDownload,
        Trending: Trending,
        HorizontalGrid: HorizontalGrid,
        Video: Video
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <PageHeader />
            <div className="mt-16">
                <Component {...pageProps} />
                {process.env.NEXT_PUBLIC_ENABLE_DISCOVERY_CMS === true && (
                    <script async={true} src={'/discovery-cms-connector.js'} />
                )}
            </div>
            <PageFooter />
        </>
    );
}

export default MyApp;
