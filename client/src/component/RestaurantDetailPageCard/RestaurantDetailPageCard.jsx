import { useContext } from "react";
import Cartcontext from "../../context/Cartcontext";

const RestaurantDetailPageCard = (props) => {
    const data = useContext(Cartcontext);
    const { cartData, addProduct } = data;

    // const cardStyle = {
    //     backgroundImage: `url(${props.image})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     borderRadius: "1rem",
    //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    //     position: "relative",
    // };

    return (
        <div className="relative w-full max-w-lg h-auto bg-white overflow-hidden rounded-lg shadow-lg py-4 px-5" >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-start p-6 space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-gray-600">{props.name}</h2>
                <p className="text-sm text-gray-600">{props.category}</p>
                <p className="text-base text-[#001f24]">{props.description}</p>
                <p className="text-lg font-bold text-gray-900">${props.price}</p>
                <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-orange-400 hover:bg-orange-500 rounded shadow-md focus:outline-none" onClick={() => addProduct(props)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default RestaurantDetailPageCard;
