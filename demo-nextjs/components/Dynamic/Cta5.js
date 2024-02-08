import { useComponentData, usePalette } from '@discoverycms/connector';
import Link from 'next/link';

function GridColumn({ title, description, buttonUrl, buttonText, textColor, buttonTextColor, buttonBackgroundColor }) {
    return (
        <div className="flex flex-col items-center p-6" style={{ color: textColor }}>
            {title && <h1 className="m-3 text-xl font-bold">{title}</h1>}
            {description && <p className="m-3 text-md">{description}</p>}
            {buttonUrl && buttonText && (
                <Link href={buttonUrl}>
                    <div
                        className="flex items-center justify-center w-full px-4 py-2 m-2 font-semibold rounded-full text-md"
                        style={{
                            color: buttonTextColor,
                            backgroundColor: buttonBackgroundColor,
                        }}
                    >
                        {buttonText}
                    </div>
                </Link>
            )}
        </div>
    );
}

export default function Cta5({ componentId }) {
    const componentData = useComponentData(componentId);
    const colorPalette = usePalette();

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }

    const backgroundImageUrl = componentData.backgroundImage?.url;

    const titleFirstCol = componentData.titleFirstCol;
    const descriptionFirstCol = componentData.descriptionFirstCol;
    const buttonUrlFirstCol = componentData.buttonUrlFirstCol;
    const buttonTextFirstCol = componentData.buttonTextFirstCol;

    const titleSecondCol = componentData.titleSecondCol;
    const descriptionSecondCol = componentData.descriptionSecondCol;
    const buttonUrlSecondCol = componentData.buttonUrlSecondCol;
    const buttonTextSecondCol = componentData.buttonTextSecondCol;

    const titleThirdCol = componentData.titleThirdCol;
    const descriptionThirdCol = componentData.descriptionThirdCol;
    const buttonUrlThirdCol = componentData.buttonUrlThirdCol;
    const buttonTextThirdCol = componentData.buttonTextThirdCol;

    const invertPalette = componentData.invertPalette;
    const primaryColor = colorPalette.primary_color ?? 'white';
    const secondaryColor = colorPalette.secondary_color ?? 'yellow';
    const backgroundColor = !invertPalette ? colorPalette.background_color : primaryColor ?? 'black';
    const textColor = invertPalette ? colorPalette.background_color : primaryColor;

    return (
        <div
            data-discovery-id={componentId}
            className="grid grid-cols-3 p-20"
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <GridColumn
                title={titleFirstCol}
                description={descriptionFirstCol}
                buttonUrl={buttonUrlFirstCol}
                buttonText={buttonTextFirstCol}
                textColor={textColor}
                buttonBackgroundColor={secondaryColor}
                buttonTextColor={backgroundColor}
            />

            <GridColumn
                title={titleSecondCol}
                description={descriptionSecondCol}
                buttonUrl={buttonUrlSecondCol}
                buttonText={buttonTextSecondCol}
                textColor={textColor}
                buttonBackgroundColor={secondaryColor}
                buttonTextColor={backgroundColor}
            />

            <GridColumn
                title={titleThirdCol}
                description={descriptionThirdCol}
                buttonUrl={buttonUrlThirdCol}
                buttonText={buttonTextThirdCol}
                textColor={textColor}
                buttonBackgroundColor={secondaryColor}
                buttonTextColor={backgroundColor}
            />
        </div>
    );
}
