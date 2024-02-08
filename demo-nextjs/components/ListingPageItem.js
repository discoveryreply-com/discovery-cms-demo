import Link from 'next/link';

export default function ListingPageItem({ content }) {
    return (
        <div className="justify-self-center mr-1 mb-10 mt-5 border rounded-lg shadow-lg w-[20rem] md:w-[30rem] lg:w-[22rem] xl:w-[30rem] 2xl:w-96 hover:shadow-xl">
            <div className="h-[12rem] md:h-[22rem] lg:h-[14rem] xl:h-[22rem] w-full overflow-hidden rounded-t-md">
                <div
                    className="object-cover w-full h-full transition hover:scale-125 "
                    style={{
                        backgroundImage: `url('${content.preview.url}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto',
                        backgroundPosition: 'center',
                    }}
                ></div>
            </div>
            <div className="">
                <div className="flex">
                    <div className="flex-auto p-3 text-sm ">
                        <div className="text-lg font-bold">
                            <Link href={`/detail/${content.slug}`}>
                                <a>{content.title}</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none p-2">
                        <div className="font-bold text-right">
                            <span className="text-xl">1</span>.99 &euro;
                        </div>
                    </div>
                </div>
                <div className="flex pt-5 pb-4 pr-2 rounded-b-lg bg-slate-100">
                    <div className="pr-1 ml-auto font-bold transition over:-translate-y-1 hover:scale-125">
                        <svg
                            className="w-6 h-6 hover:fill-gray-700 hover:stroke-gray-700 stroke-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </div>
                    86
                </div>
            </div>
        </div>
    );
}
