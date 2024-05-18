
const RestaurantDetailPageCard = (props) => {
    return (
        <div className="relative w-full max-w-lg h-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-start space-y-2">
                <h2 className="text-2xl font-semibold text-gray-800">{props.name}</h2>
                <p className="text-sm text-gray-600">{props.category}</p>
                <p className="text-base text-gray-700">{props.description}</p>
                <p className="text-lg font-bold text-gray-900">${props.price}</p>
                <button>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default RestaurantDetailPageCard;
