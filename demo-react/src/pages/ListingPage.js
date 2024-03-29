import { useDiscoveryContents } from '@discoverycms/connector';
import ListingPageItem from '../components/ListingPageItem';
import FilterPanel from '../components/FilterPanel';

export default function ListingPage() {
    const contents = useDiscoveryContents({ type: 'DemoProduct', children: 'details' }) ?? {
        entities: [],
    };

    return (
        <div className="w-full h-full bg-white md:flex border-t border-t-gray-300">
            <div className="md:flex-auto w-full md:w-3/12 xl:w-1/5">
                <FilterPanel />
            </div>

            <div className="m-2 md:ml-8 mt-10 md:flex-auto w-full md:w-9/12 xl:w-4/5">
                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-1 mt-5 justify-items-center">
                        {contents.entities.map((content) => {
                            return <ListingPageItem content={content} key={content.slug} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
