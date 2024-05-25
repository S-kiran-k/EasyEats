import { useParams } from "react-router-dom";
import { FoodList } from "../../Api/Api";
import Topdishescard from "../Topdishescard/Topdishescard";

const MenuCard = () => {
    const { id } = useParams();
    const filterData = FoodList.filter((e) => e.category === id);

    return (
        <div className="2xl:container mx-auto w-[80%] py-8 px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterData.map((data) => (
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
        </div>
    );
};

export default MenuCard;
