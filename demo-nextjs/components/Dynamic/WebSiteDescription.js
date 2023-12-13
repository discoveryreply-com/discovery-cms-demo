import Link from 'next/link';
import { useComponentData } from '@discoverycms/connector';

export default function WebSiteDescription({ componentId }) {
    const componentData = useComponentData(componentId);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    
    return (
        <div data-discovery-id={componentId}>
            <div style={{
                backgroundImage: `url(${componentData.backgroundImage.url})`,
                // height: `400px`,
                backgroundSize: `cover`,
                height: `800px`
            }}>
                <div className={`flex justify-evenly w-1/2 h-96`}>
                    <div className="relative z-0 ml-40">
                        <main className="max-w-7xl ">
                            <div className="text-center lg:text-left mt-60 mb-16">
                                <h1 className="tracking-tight font-bold text-5xl md:text-6xl">
                                    <span className="block text-white w-50">{componentData.headline ?? ''} </span>
                                </h1>
                                <div
                                    className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                    dangerouslySetInnerHTML={{ __html: componentData.secondaryHeadline}}
                                ></div>
                            </div>
                        </main>
                    </div>
                </div>

                <div className="w-1/2 hidden lg:block">
                </div>
            </div>
        </div>
    );
}
