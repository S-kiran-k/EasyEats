import { useParams } from "react-router-dom";
import { FoodList } from "../../Api/Api";
import RestaurantDetailPageCard from "../RestaurantDetailPageCard/RestaurantDetailPageCard";

const RestaurantDetailsPage = () => {
    const { id } = useParams();
    // Filter dishes based on the restaurant ID
    console.log("Restaurant ID from params:", id);
    const dishes = FoodList.filter((dish) => {
        console.log(`Dish Restaurant ID: ${dish.restaurantId == id}`);
        return dish.restaurantId == id; // Ensure the restaurantId is matched correctly
    });
    return (
        <div className="2xl:container">
            <div className="mx-auto w-[90%] grid grid-cols-1 bg-black ">
                <div className="bg-blue-50 flex justify-center items-center py-40">
                    {dishes.map((data) => {
                        // console.log(e);
                        return (
                            <RestaurantDetailPageCard
                                key={data.id}
                                index={data.restaurantId}
                                image={data.image}
                                name={data.name}
                                description={data.description}
                                price={data.price}
                            />

                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default RestaurantDetailsPage;
