import './App.css';
import { Outlet } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import { setupDiscoveryCms, getDiscoveryCms } from '@discoverycms/connector';
import Cta from './components/CTA';
import EditorChoice from './components/EditorsChoice';
import TopDownload from './components/TopDownloads';
import Trending from './components/Trending';
import HorizontalGrid from './components/HorizontalGrid';

setupDiscoveryCms({
    apiRoot: process.env.REACT_APP_API_ROOT,
    apiToken: process.env.REACT_APP_API_TOKEN,
    propertyTitle: process.env.REACT_APP_PROPERTY_TITLE,
    components: {
        CTA: Cta,
        EditorChoice: EditorChoice,
        TopDownloads: TopDownload,
        Trending: Trending,
        HorizontalGrid: HorizontalGrid,
    },
    enableConnectorScript: true,
    disableCache: true,
});

function App() {
    return (
        <div className="bg-gray-100 h-full mt-16">
            <PageHeader />
            <Outlet />
            <PageFooter />
            {getDiscoveryCms().isConnectorScriptEnabled() && (
                <script id="connectorScript" src={'./discovery-cms-connector.js'} />
            )}
        </div>
    );
}

export default App;
