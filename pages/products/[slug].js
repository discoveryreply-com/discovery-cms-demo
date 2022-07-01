import { fetchDiscoveryContentData } from '@discovery-frontend/cms-connector';

export default function ProductDetail({ productData }) {
    if (productData == null) {
        return <p>Loading...</p>;
    }

    return (
        <div className="mt-[2rem] w-100 flex justify-center">
            <div className="mt-5 lg:flex lg:ml-20 mb-10 w-[80rem]">
                <div className="w-2/4 mt-[4rem]">
                    <img src={productData.preview.url} alt="" className="w-full h-auto" />
                </div>
                <div className=" ml-1 mr-1 md:ml-5 lg:ml-16 w-2/4 mt-[4rem]">
                    <div className="mt-5 mb-2 text-xs italic font-light text-gray-400">
                        <div className="block inline mr-1">Product</div>
                        <div className="block inline mr-1">-</div>
                        <div className="block inline mr-1">Collection</div>
                        <div className="block inline mr-1">-</div>
                        <div className="block inline mr-1">{productData.title}</div>
                    </div>

                    <div className="w-full text-3xl font-medium text-gray-800">{productData.title}</div>

                    <div className="w-full font-light text-gray-400 text-sm mb-2">
                        {productData.categories &&
                            Object.keys(productData.categories).map(function (key) {
                                return (
                                    <span key={key} className="mr-2">
                                        {productData.categories[key]}
                                    </span>
                                );
                            })}
                    </div>
                    {productData?.description && (
                        <div className="mt-5 text-sm font-light text-gray-500 md:max-w-md">
                            {/* needed because the property is HTML */}
                            <div dangerouslySetInnerHTML={{ __html: productData.description }} />
                        </div>
                    )}
                    <button className="items-center h-auto px-6 py-2 mt-5 text-sm font-semibold text-white bg-black rounded-full shadow-md lg:mt-5 2xl:mt-10 hover:bg-gray-700 hover:shadow-lg">
                        <span>Add to Cart</span>
                    </button>
                    <div className="max-w-md mt-5 space-y-1">
                        <details className="p-4 bg-white rounded-lg shadow-md" open>
                            <summary className="text-sm font-semibold leading-6 text-gray-500">Colors</summary>
                            <div className="mt-3">
                                <div className="text-sm leading-6 text-gray-600">
                                    <div className="mt-2">
                                        <div className="flex grid justify-center grid-cols-8 gap-1">
                                            <button className="flow-root w-8 h-8 rounded-full bg-slate-500 hover:bg-slate-400 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300" />
                                            <button className="flow-root w-8 h-8 rounded-full bg-zinc-500 hover:bg-zinc-400 active:bg-zinc-600 focus:outline-none focus:ring focus:ring-zinc-300" />
                                            <button className="flow-root w-8 h-8 rounded-full bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-600 focus:outline-none focus:ring focus:ring-neutral-300" />
                                            <button className="flow-root w-8 h-8 rounded-full bg-stone-500 hover:bg-stone-400 active:bg-stone-600 focus:outline-none focus:ring focus:ring-stone-300" />
                                            <button className="flow-root w-8 h-8 bg-red-500 rounded-full hover:bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-300" />
                                            <button className="flow-root w-8 h-8 bg-orange-500 rounded-full hover:bg-orange-400 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300" />
                                            <button className="flow-root w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-300" />
                                            <button className="flow-root w-8 h-8 bg-yellow-500 rounded-full hover:bg-yellow-400 active:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300" />
                                            <button className="flow-root w-8 h-8 rounded-full bg-lime-500 hover:bg-lime-400 active:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-300" />
                                            <button className="flow-root w-8 h-8 bg-green-500 rounded-full hover:bg-green-400 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="p-4 text-gray-500 bg-white rounded-lg shadow-md" open>
                            <summary className="text-sm font-semibold leading-6">Product Details</summary>
                            <div className="mt-3">
                                <div className="text-sm leading-6 text-gray-600">
                                    <strong>Composition</strong>: Cotton 100%
                                </div>
                                <div className="text-sm leading-6 text-gray-600">
                                    <strong>Material</strong>: Mesh
                                </div>
                                <div className="text-sm leading-6 text-gray-600">
                                    <strong>Details</strong>: printed mesh
                                </div>
                                <div className="text-sm leading-6 text-gray-600">
                                    <strong>Size</strong>: Normal
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const slug = context.params.slug;

    if (context.query.token) {
        context.token = context.query.token;
    }

    const data = await fetchDiscoveryContentData(slug, context);

    return {
        props: {
            productData: data,
        },
    };
}
