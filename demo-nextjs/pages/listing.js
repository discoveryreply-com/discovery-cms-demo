import { getDiscoveryCms } from '@discoverycms/connector';
import ListingPageItem from '../components/ListingPageItem';
import FilterPanel from '../components/FilterPanel';

/**
 * 
 * This is an example of page with fixed structure.
 * Unlike the `[...slug].js` page, this page is not dynamic, meaning that you users won't
 * be able to add/remove components from this page, but they can only edit the content of 
 * the components.
 */

export default function ContentsPage({ contents }) {
    return (
        <div className="w-full h-full bg-white border-t md:flex border-t-gray-300">
            <div className="w-full md:flex-auto md:w-3/12 xl:w-1/5">
                <FilterPanel />
            </div>
            <div className="w-full m-2 mt-10 md:ml-8 md:flex-auto md:w-9/12 xl:w-4/5">
                <div className="w-full">
                    <div className="grid grid-cols-1 gap-1 mt-5 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center">
                        {contents.entities.map((content) => {
                            return <ListingPageItem content={content} key={content.slug} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const filters = getDiscoveryCms().getFiltersFromQueryParams(context.query);

    const contents = await getDiscoveryCms().getContents({
        type: 'DemoProduct',
        children: 'details',
        filters,
        ...context.query,
    });

    return {
        props: {
            contents: contents,
        },
    };
}
