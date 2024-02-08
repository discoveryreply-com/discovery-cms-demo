import { useComponentData, usePalette } from '@discoverycms/connector';
import Link from 'next/link';

export default function Hero({ componentId }) {
    const componentData = useComponentData(componentId);
    const colorPalette = usePalette();

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }

    const showHeader = componentData.showHeader;
    const headerLeftText = componentData.headerLeftText ?? `Name`;
    const headerLeftLogoUrl = componentData.headerLeftLogo?.url ?? '';
    const headerRightText = componentData.headerRightText ?? `Questions? Contact +39 1234456789`;
    const sideText = componentData.sideText ?? `Marginal Text`;
    const mainText = componentData.mainText ?? `Main Text`;
    const buttonText = componentData.button[0].label ?? `Button Text`;
    const buttonUrl = componentData.button[0].url ?? ``;
    const backgroundImageUrl = componentData.backgroundImage?.url;

    const invertPalette = componentData.invertPalette;
    const primaryColor = colorPalette.primary_color ?? 'white';
    const secondaryColor = colorPalette.secondary_color ?? 'yellow';
    const backgroundColor = !invertPalette ? colorPalette.background_color : primaryColor;
    const textColor = invertPalette ? colorPalette.background_color : primaryColor;

    return (
        <div
            data-discovery-id={componentId}
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: textColor,
            }}
        >
            <div className={`flex flex-col`}>
                {showHeader && (
                    <div className={`flex flex-row mt-4`}>
                        <div className={`flex flex-row mr-auto ml-3 text-sm font-semibold`}>
                            {headerLeftLogoUrl && (
                                <img
                                    className="object-cover mr-3 rounded-lg shadow-xl hover:shadow-2xl"
                                    src={headerLeftLogoUrl}
                                    alt=""
                                    style={{ width: '20px', height: '20px' }}
                                />
                            )}
                            <span>{headerLeftText}</span>
                        </div>
                        <div className={`ml-auto mr-3 text-sm font-semibold`}>
                            <div>{headerRightText}</div>
                        </div>
                    </div>
                )}

                <div className={`flex flex-col items-center mt-10`}>
                    <div className={` flex flex-col max-w-md items-center`}>
                        <h3 className="m-1 italic font-semibold text-center text-md" style={{ color: secondaryColor }}>
                            {sideText}
                        </h3>
                        <h1 className="m-3 text-2xl font-bold text-center">{mainText}</h1>
                        <Link href={buttonUrl}>
                            <div
                                className="flex items-center justify-center w-full px-4 py-2 m-1 mb-10 font-semibold rounded-full text-md"
                                style={{
                                    color: backgroundColor,
                                    backgroundColor: secondaryColor,
                                }}
                            >
                                {buttonText}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
