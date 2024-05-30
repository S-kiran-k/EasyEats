import "./Home.css";
import Topdishescard from "../Topdishescard/Topdishescard";
import { useNavigate } from "react-router-dom";
import ExploremenudataDetails from "../ExploremenudataDetails/ExploremenudataDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";


function Home() {
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {

        try {
            // setLoading(true)
            const response = await axios.get("http://localhost:8080/foodlist");
            console.log(response.data.data);
            setFoodList(response.data.data);

        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const navigate = useNavigate();

    if (loading) {
        return <>
            <Loading /></>
    }
    else {
        return (
            <>
                <section className="container mx-auto py-5">
                    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <div className="back-img flex flex-col justify-center items-start h-[100vh] px-6 md:px-12 lg:px-16 gap-4 md:gap-6">
                            <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl flex flex-col">
                                Order Your <span>Favourite Food</span>
                            </h1>
                            <p className="text-white text-sm md:text-base lg:text-lg">
                                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                            </p>
                            <button
                                type="button"
                                className="bg-white px-3 py-2 md:px-4 md:py-2 rounded-lg"
                                onClick={() => {
                                    navigate("/viewmenu");
                                }}
                            >
                                View Menu
                            </button>
                        </div>
                    </div>
                    <div className="w-[80%] mx-auto">
                        <ExploremenudataDetails />
                    </div>

                    <hr className="py-5 my-5 w-[80%] mx-auto" />
                    <h1 className="mx-auto w-[80%] pt-5 font-semibold text-2xl underline">Top Dishes Near you</h1>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] mx-auto py-5">
                        {foodList.map((data) => (
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
                </section >
            </>
        );
    }
}

export default Home;
