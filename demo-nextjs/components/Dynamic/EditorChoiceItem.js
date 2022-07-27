export default function EditorChoiceItem({ title, description, image }) {
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm hover:shadow-xl">
            <a href="#" className="flex justify-center overflow-hidden">
                <img
                    className="rounded-t-lg w-full object-cover transition hover:scale-125"
                    style={{ height: '400px', width: '500px' }}
                    src={image}
                    alt=""
                />
            </a>
            <div className="p-6 ">
                <h5 className="text-gray-900 text-2xl font-medium mb-2 flex justify-center">{title}</h5>
                {/* commento perche' se presente in alcuni e altri no si rovina formattazione (effetto zig zag)
                <p className="text-gray-700 text-base mb-4 flex justify-center m-7 mt-5 text-center">
                    <div dangerouslySetInnerHTML={{__html: description ?? ''}}/>
                </p>
                */}
                <div className="flex justify-center mt-10">
                    <button
                        type="button"
                        className="px-6 py-2 border-2 border-blue-800 text-blue-800 font-medium text-md leading-tight uppercase rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
}
