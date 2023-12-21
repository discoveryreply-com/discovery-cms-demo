import { useComponentData, usePalette } from '@discoverycms/connector';
import Link from 'next/link';

export default function Cta4({ componentId }) {
    const componentData = useComponentData(componentId);
    const colorPalette = usePalette();

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }

    const mainText = componentData.mainText ?? `Main Text`;
    const descriptionText = componentData.descriptionText ?? `Description Text`;
    const footText = componentData.footText ?? `Foot Text`;
    const buttonText = componentData.button[0].label ?? `Button Text`;
    const buttonUrl = componentData.button[0].url ?? ``;

    const invertPalette = componentData.invertPalette;
    const primaryColor = colorPalette.primary_color ?? 'white';
    const secondaryColor = colorPalette.secondary_color ?? 'light blue';
    const backgroundColor = !invertPalette ? colorPalette.background_color : primaryColor;
    const textColor = invertPalette ? colorPalette.background_color : primaryColor;

    return (
        <div data-discovery-id={componentId} style={{ backgroundColor: backgroundColor, color: textColor }}>
            <div className={`flex flex-col items-center`}>
                <div className={`flex flex-col items-center max-w-md`}>
                    <h1 className="mb-3 mt-10 text-2xl font-bold text-center">{mainText}</h1>
                    <h3 className="m-5 text-md text-center" style={{ color: textColor }}>
                        {descriptionText}
                    </h3>

                    <Link href={buttonUrl}>
                        <div
                            className="flex items-center justify-center w-full px-4 py-2 text-md font-semibold m-1"
                            style={{
                                color: backgroundColor,
                                backgroundColor: secondaryColor,
                            }}
                        >
                            {buttonText}
                        </div>
                    </Link>

                    <h5 className="m-1 mb-10 text-sm text-center" style={{ color: textColor }}>
                        {footText}
                    </h5>
                </div>
            </div>
        </div>
    );
}
