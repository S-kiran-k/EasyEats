import "./Home.css";
import { Exploremenudata, FoodList } from "../../Api/Api";
import Topdishescard from "../Topdishescard/Topdishescard";
import Exploredatamenu from "../Exploredatamenu/Exploredatamenu";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <section className="container mx-auto py-5">
                <div className="w-[80%] grid grid-cols-1 mx-auto">
                    <div className="back-img flex flex-col justify-center items-start h-[100vh] px-16 gap-6">
                        <h1 className="text-white font-semibold text-5xl flex flex-col">
                            Order Your <span>Favourite Food</span>
                        </h1>
                        <p className="text-white">
                            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                        </p>
                        <button
                            type="button"
                            className="bg-white px-4 py-2 rounded-lg"
                            onClick={() => {
                                navigate("/viewmenu");
                            }}
                        >
                            View Menu
                        </button>
                    </div>
                    <div className="py-6 space-y-2">
                        <h1 className="font-medium text-2xl">Explore our menu</h1>
                        <p>
                            Choose from the diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {Exploremenudata.map((data, index) => (
                            <Exploredatamenu key={index} menu_name={data.menu_name} menu_image={data.menu_image} />
                        ))}
                    </div>
                </div>
                <hr className="py-5 my-5 w-[80%] mx-auto" />
                <h1 className="mx-auto w-[80%] pt-5 font-semibold text-2xl underline">Top Dishes Near you</h1>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] mx-auto">
                    {FoodList.map((data) => (
                        <Topdishescard
                            key={data.id}
                            index={data.restaurantId}
                            image={data.image}
                            name={data.name}
                            offer={data.offer}
                            description={data.description}
                            price={data.price}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;
