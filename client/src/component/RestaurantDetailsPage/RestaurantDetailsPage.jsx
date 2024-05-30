import { useParams } from "react-router-dom";
// import { FoodList } from "../../Api/Api";
import RestaurantDetailPageCard from "../RestaurantDetailPageCard/RestaurantDetailPageCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const RestaurantDetailsPage = () => {
    const { id } = useParams();
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {

        try {
            // setLoading(true)
            const response = await axios.get("http://localhost:8080/foodlist");
            console.log(response);
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
    // Filter dishes based on the restaurant ID
    console.log("Restaurant ID from params:", id);
    const dishes = foodList.filter((dish) => {
        console.log(`Dish Restaurant ID: ${dish.restaurantId == id}`);
        return dish.restaurantId == id; // Ensure the restaurantId is matched correctly
    });

    const bgImageStyle = dishes.length > 0 ? {
        backgroundImage: `url(${dishes[0].image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    } : {};

    console.log("data from dishes", dishes)

    if (loading) {
        return <>
            <Loading />
        </>
    }
    else {
        return (
            <div className="2xl:container " style={bgImageStyle} >
                <div className="relative">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="mx-auto w-[90%] grid grid-cols-1">
                        <div className="flex justify-center items-center py-40">
                            {dishes.map((data) => (
                                <RestaurantDetailPageCard
                                    key={data.id}
                                    index={data.restaurantId}
                                    image={data.image}
                                    name={data.name}
                                    description={data.description}
                                    price={data.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default RestaurantDetailsPage;
