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
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                            src={componentData.video.url ?? ''}
                        ></video>
                        <div className="absolute inset-0 bg-neutral-300 mix-blend-multiply" />
                    </div>
                    <div className="relative w-full">
                        <div className="flex w-full">
                            <div className="mt-[32rem] 2xl:mt-[38rem] xl:ml-24 2xl:ml-40 w-auto text-5xl text-white/80">
                                {componentData.headline ?? ''}
                            </div>
                            <div className="mt-[34rem] 2xl:mt-[40rem] xl:mr-24 2xl:mr-40 ml-auto">
                                <button
                                    type="button"
                                    className="bg-black/50 rounded-xl text-2xl text-white px-16 py-2 hover:bg-white/50 hover:text-black"
                                >
                                    {componentData.buttonLabel ?? ''}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
