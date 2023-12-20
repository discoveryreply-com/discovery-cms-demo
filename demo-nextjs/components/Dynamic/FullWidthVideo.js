import { useComponentData } from '@discoverycms/connector';

/**
 * Component with a simple Video Player in autostart, full width.
 * 
 * @returns 
 */
export default function FullWidthVideo({ componentId }) {
    const componentData = useComponentData(componentId);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }

    return (
        <div data-discovery-id={componentId} className="mt-[4rem]">
            <div className="relative h-[45rem] 2xl:h-[54rem]">
                <div className="w-screen h-auto mx-auto mb-48 sm:px-6 lg:px-8">
                    <div className="absolute inset-0 object-cover w-auto h-full min-w-full min-h-full max-w-none">
                        <video
                            autoPlay
                            loop
                            muted
                            className="object-cover w-full h-full"
                            src={componentData.video.url ?? ''}
                        ></video>
                        <div className="absolute inset-0 bg-neutral-300 mix-blend-multiply" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
