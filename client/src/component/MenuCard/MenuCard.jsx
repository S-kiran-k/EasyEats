import { useParams } from "react-router-dom";
import Topdishescard from "../Topdishescard/Topdishescard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from './../Loading/Loading';

const MenuCard = () => {
    const { id } = useParams();
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {

        try {
            // setLoading(true)
            const response = await axios.get("https://easyeats-1.onrender.com/foodlist");
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

    const filterData = foodList.filter((e) => e.category === id);



    if (loading) {
        return <p><Loading /></p>
    }
    else {
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
    }
};

export default MenuCard;
