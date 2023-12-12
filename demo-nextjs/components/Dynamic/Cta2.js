import Link from 'next/link';
import { useComponentData, DiscoveryContext, useLayoutComponentData } from '@discoverycms/connector';
import useLayoutPalette from '../../hooks/useLayoutPalette';


export default function Cta2({ componentId }) {
    const componentData = useComponentData(componentId);
    const colorPalette = useLayoutPalette();

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    
    return (
        <div data-discovery-id={componentId} style={{backgroundColor: `antiquewhite`}}>
            <div className={`flex justify-evenly items-center ${componentData.imagePosition === 'left' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/3 lg:mt-16 ${componentData.imagePosition === 'right' ? 'flex justify-end' : ''}`}>
                    <div className="relative z-0 pt-10 pb-8 m-10 bg-bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:pb-24 xl:pb-24">
                        <main className="max-w-7xl ">
                            <div className="mt-16 text-center lg:text-left">
                                <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                                    <span className="block text-gray-600 w-50">{componentData.headline ?? ''} </span>
                                </h1>
                                <div
                                    className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                    dangerouslySetInnerHTML={{ __html: componentData.body }}
                                ></div>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="mr-5">
                                        <Link href={componentData.url1[0].url ?? ''}>
                                            <div className="flex items-center justify-center w-full px-8 py-3 text-2xl text-white border rounded-full" style={{backgroundColor : componentData.btnColor}}>
                                                {componentData.url1[0].label ?? ''}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link href={componentData.url2[0].url ?? ''}>
                                            <div className="flex items-center justify-center w-full px-8 py-3 text-2xl text-gray-600 border rounded-full" style={{borderColor : componentData.btnColor}}>
                                                {componentData.url2[0].label ?? ''}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                <div className="hidden w-1/3 lg:block lg:mt-16">
                    <Link href="/assets/1" className={`${componentData.imagePosition === 'left' ? 'flex justify-end' : ''}`}>
                        <img
                            className="object-contain rounded-lg shadow-xl hover:shadow-2xl"
                            src={componentData.image.url ?? '/no-image.jpg'}
                            alt=""
                            style={{ width: '600px' }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
