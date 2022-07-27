export default function TrendingItem({ title, image }) {
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm hover:shadow-xl transition hover:scale-105">
            <a href="#">
                <img
                    className="rounded-t-lg object-cover"
                    src={image}
                    alt=""
                    style={{ width: '600px', height: '200px' }}
                />
            </a>
            <div className="p-4 flex justify-center">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            </div>
        </div>
    );
}
