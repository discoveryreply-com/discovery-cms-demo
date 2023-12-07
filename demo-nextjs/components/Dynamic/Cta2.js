import Link from 'next/link';
import { useComponentData } from '@discoverycms/connector';

export default function Cta2({ componentId }) {
    const componentData = useComponentData(componentId);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    
    return (
        <div data-discovery-id={componentId}>
            <div className={`flex justify-center items-center ${componentData.imagePosition === 'left' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 lg:mt-16 ${componentData.imagePosition === 'right' ? 'flex justify-end' : ''}`}>
                    <div className="relative z-0 pt-10 pb-8 bg-bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:pb-24 xl:pb-24 m-10">
                        <main className="max-w-7xl ">
                            <div className="text-center lg:text-left mt-16">
                                <h1 className="tracking-tight font-bold text-5xl md:text-6xl">
                                    <span className="block text-gray-600 w-50">{componentData.headline ?? ''} </span>
                                </h1>
                                <div
                                    className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                    dangerouslySetInnerHTML={{ __html: componentData.body }}
                                ></div>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="mr-5">
                                        <Link href={componentData.url1[0].url ?? ''}>
                                            <div className="w-full flex items-center justify-center px-8 py-3 border rounded-full text-white text-2xl" style={{backgroundColor : componentData.btnColor}}>
                                                {componentData.url1[0].label ?? ''}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link href={componentData.url2[0].url ?? ''}>
                                            <div className="w-full flex items-center justify-center px-8 py-3 border rounded-full text-gray-600 text-2xl" style={{borderColor : componentData.btnColor}}>
                                                {componentData.url2[0].label ?? ''}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                <div style={{ width: '150px'}}></div>

                <div className="w-1/2 hidden lg:block lg:mt-16">
                    <Link href="/assets/1" className={`${componentData.imagePosition === 'left' ? 'flex justify-end' : ''}`}>
                        <img
                            className="object-cover rounded-lg shadow-xl hover:shadow-2xl"
                            src={componentData.image.url ?? '/no-image.jpg'}
                            alt=""
                            style={{ width: '500px', height: '500px' }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
