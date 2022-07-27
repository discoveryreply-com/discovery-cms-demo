import '../styles/globals.css';
import PageHeader from '../components/Dynamic/PageHeader';
import PageFooter from '../components/Dynamic/PageFooter';
import { setupDiscoveryCms } from '@discovery-frontend/cms-connector';
import Cta from '../components/Dynamic/Cta';
import Sample from '../components/Dynamic/Sample';
import EditorChoice from '../components/Dynamic/EditorChoice';
import TopDownload from '../components/Dynamic/TopDownloads';
import Trending from '../components/Dynamic/Trending';
import HorizontalGrid from '../components/Dynamic/HorizontalGrid';
import HorizontalGridItem from '../components/Dynamic/HorizontalGridItem';
import HorizontalGridItem2 from '../components/Dynamic/HorizontalGridItem2';

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
        HorizontalGridItem: HorizontalGridItem,
        HorizontalGridItem2: HorizontalGridItem2,
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <PageHeader />
            <Component {...pageProps} />
            {process.env.NEXT_PUBLIC_ENABLE_DISCOVERY_CMS === true && (
                <script async={true} src={'/discovery-cms-connector.js'} />
            )}
            <PageFooter />
        </>
    );
}

export default MyApp;
