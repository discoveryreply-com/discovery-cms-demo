import { useComponentData } from '@discoverycms/connector';
import Link from 'next/link';
import useLayoutPalette from '../../hooks/useLayoutPalette';

export default function Cta3({ componentId }) {
    const componentData = useComponentData(componentId);
    const colorPalette = useLayoutPalette();

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    const isLeft = componentData.imagePosition === 'left';
    const backgroundColor = !isLeft ? colorPalette.background : colorPalette.primary;
    const textColor = isLeft ? colorPalette.background : colorPalette.primary;
    const secondaryColor = colorPalette.secondary ?? 'gray';

    return (
        <div data-discovery-id={componentId} style={{ backgroundColor }}>
            <div className={`flex justify-evenly items-center`}>
                <div className={`w-1/3 lg:mt-16 flex justify-end`}>
                    <div className="relative z-0 pt-10 pb-8 mr-0 bg-bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:pb-24 xl:pb-24 m-10">
                        <main className="max-w-7xl text-center">
                            <h3 className="tracking-tight text-2xl md:text-3xl">
                                <span className="block w-50" style={{ color: textColor }}>
                                    {componentData.subHeadline ?? ''}{' '}
                                </span>
                            </h3>

                            <h1 className="tracking-tight font-bold text-5xl md:text-6xl">
                                <span className="block w-50" style={{ color: textColor }}>
                                    {componentData.headline ?? ''}{' '}
                                </span>
                            </h1>
                        </main>
                    </div>
                </div>

                <div className="w-1/3 hidden lg:block lg:mt-16">
                    <div className="relative z-0 bg-bg-gray-900 lg:max-w-2xl pb-0 m-10">
                        <div
                            className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                            style={{ color: textColor }}
                            dangerouslySetInnerHTML={{ __html: componentData.body }}
                        ></div>
                    </div>
                    <div className="ml-10 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="mr-5">
                            <Link href={componentData.url1[0].url ?? ''}>
                                <div
                                    className="w-full flex items-center justify-center px-8 py-3 border rounded-full text-2xl"
                                    style={{
                                        color: textColor,
                                        backgroundColor: secondaryColor,
                                        borderColor: textColor,
                                    }}
                                >
                                    {componentData.url1[0].label ?? ''}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
