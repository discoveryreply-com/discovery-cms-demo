import { useComponentData } from '@discoverycms/connector';

export default function FullScreenVideo({ componentId }) {
    const componentData = useComponentData(componentId);

    if (componentData === undefined) {
        return <span>Loading..</span>;
    }
    return (
        <div data-discovery-id={componentId} className="mt-[4rem]">
            <div className="relative h-[45rem] 2xl:h-[54rem]">
                <div className="w-screen mx-auto h-auto sm:px-6 lg:px-8 mb-48">
                    <div className="absolute inset-0 w-auto min-w-full h-full object-cover min-h-full max-w-none">
                        <video
                            autoPlay={componentData.mode === "2" || componentData.mode === '' || componentData.mode === false}
                            muted={componentData.mode === "2" || componentData.mode === '' || componentData.mode === false}
                            loop={componentData.mode === "2" || componentData.mode === '' || componentData.mode === false}
                            controls={componentData.mode === "1"}
                            className="w-full h-full object-cover"
                            src={componentData.video.url ?? ''}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
