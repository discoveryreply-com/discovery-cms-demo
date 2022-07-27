import Cta from "./components/CTA";
import EditorChoice from "./components/EditorsChoice";
import TopDownload from "./components/TopDownloads";

export default function HomePage() {
    return (
        <div>
            <Cta componentId={'1'}></Cta>
            <EditorChoice componentId={'1'}></EditorChoice>
            <TopDownload componentId={'1'}></TopDownload>
        </div>
    )
}