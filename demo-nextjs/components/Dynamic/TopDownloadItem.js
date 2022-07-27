export default function TopDownloadItem({ title, image }) {
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm hover:shadow-xl transition hover:scale-105">
            <a className="" href="#">
                <img
                    className="rounded-t-lg w-full h-54 w-54 object-cover"
                    src={image}
                    style={{ height: '150px' }}
                    alt=""
                />
            </a>
            <div className=" flex justify-center">
                <h5 className="text-gray-900 py-3 text-xl font-medium">{title}</h5>
            </div>
        </div>
    );
}
