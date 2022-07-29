import './App.css';
import { Outlet } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import { setupDiscoveryCms } from '@discoverycms/connector';
import Cta from './components/CTA';
import EditorChoice from './components/EditorsChoice';
import TopDownload from './components/TopDownloads';
import Trending from './components/Trending';
import HorizontalGrid from './components/HorizontalGrid';
import HorizontalGridItem from './components/HorizontalGridItem';
import HorizontalGridItem2 from './components/HorizontalGridItem2';

setupDiscoveryCms({
    apiRoot: 'http://[::1]:8081/api/v1/',
    apiToken: '1',
    components: {
        CTA: Cta,
        EditorChoice: EditorChoice,
        TopDownloads: TopDownload,
        Trending: Trending,
        HorizontalGrid: HorizontalGrid,
        HorizontalGridItem: HorizontalGridItem,
        HorizontalGridItem2: HorizontalGridItem2,
    },
});

function App() {
    return (
        <div className="bg-gray-100 h-full mt-16">
            <PageHeader />
            <Outlet />
            <PageFooter />
            <script src={'./discovery-cms-connector.js'} />
        </div>
    );
}

export default App;
