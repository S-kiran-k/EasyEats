import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';

const Testing = () => {
    const [foodList, setFoodList] = useState([]);
    const [loading , setLoading] = useState(true)
    const fetchData = async () => {

        try {
            // setLoading(true)
            const response = await axios.get("http://localhost:8080/foodlist");
            console.log(response);
            setFoodList(response.data.data);
            
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (<>
        
        <Loading/>
        </>)
    }
    else {
        return (
            <div>
                <div>
                    <div>
                        <pre>{JSON.stringify(foodList)}</pre>
                        <p>This is post</p>
                        <p>{


                            // category: "Pizza"

                            // description: "Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil."

                            // foodlist_id: "abfd5398-29ef-4d5c-a692-b2889e42d35a"

                            // id: 1

                            // image: "https://ik.imagekit.io/0oeuxr64bc/Easy%20Eats/frontend_assets/food_2.png?updatedAt=1715666425786"

                            // name: "Margherita Pizza"

                            // offer: "20"

                            // price: "15"

                            // restaurantId: "1"

                            foodList.map((e) => {
                                <div>
                                    <div>
                                        <div>y
                                            <img src={e.image} alt={e.name}/>
                                        </div>
                                    </div>
                                </div>
                            })
                        }</p>
                    </div>
                </div>
            </div>
        );
    }
   
};

export default Testing;
