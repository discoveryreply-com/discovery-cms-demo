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
            }}>
                <div className={`flex justify-end w-1/2`}>
                    <div className="relative z-0">
                        <main className="max-w-7xl ">
                            <div className="text-center lg:text-left mt-16 mb-16">
                                <h1 className="tracking-tight font-bold text-5xl md:text-6xl">
                                    <span className="block text-white w-50">{componentData.headline ?? ''} </span>
                                </h1>
                                <div
                                    className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                                    dangerouslySetInnerHTML={{ __html: componentData.body }}
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
