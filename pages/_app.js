import '../styles/globals.css';
import PageHeader from '../components/Dynamic/PageHeader';
import PageFooter from '../components/Dynamic/PageFooter';

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
