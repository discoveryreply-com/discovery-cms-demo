
export default function FilterPanel() {
    return (
        <div className="w-full h-full bg-white xl:flex">
            <div className=" xl:flex-auto w-full md:2/5 xl:w-1/5 border-b-0 border-t-0 border border-gray-300">
                <div className="inline-block text-xl font-semibold p-4 border-b border-b-gray-300 bg-white text-gray-800 w-full">
                    <svg className="inline-block w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                    </svg>  Filters
                </div>
                <details className="p-4 border-b border-b-gray-300 bg-white" open>
                    <summary className="text-lg leading-6 font-semibold text-gray-600">
                        Price
                    </summary>
                    <div className="mt-3">
                        <div className="text-gray-600 text-sm leading-6">
                            <div className="mt-2">

                                <div className="flex justify-center mt-3">
                                    <div className="mb-3 xl:w-96">
                                        <input
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Min &euro;"/>
                                    </div>
                                    <div className="flex justify-center mb-3 p-2">
                                        to
                                    </div>
                                    <div className="mb-3 xl:w-96">
                                        <input
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Max &euro;"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}