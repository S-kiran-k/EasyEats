import { useEffect, useState } from "react";
import { Searchicon } from "../../assets/Icons";
import PopularCuisines from "./PopularCuisines/PopularCuisines";
import axios from "axios";
import Loading from "../Loading/Loading";

function Search() {
  const [searchData, setSearchData] = useState("");
  const [filterData, setFilterData] = useState([]);
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

  // const handleSearch = () => {
  //   const filteredData = FoodList.filter((item) =>
  //     item.name.toLowerCase().includes(searchData.toLowerCase())
  //   );
  //   setFilterData(filteredData);
  // };
  // 

  if (loading) {
    <p><Loading /></p>
  }
  else {
    return (
      <>
        <div className="2xl:container py-10">
          <div className="mx-auto w-[70%] ">
            <div className="flex flex-col">
              <div className="flex">
                <input
                  value={searchData}
                  type="search"
                  placeholder="Search..."
                  className="border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 shadow-xl"
                  onChange={(e) => setSearchData(e.target.value)}
                />
                <button
                  onClick={() => {
                    const filterData = foodList.filter(
                      (item) => (item.name.toLowerCase().includes(searchData.toLowerCase()))
                    )
                    if (searchData === "") {
                      setFilterData("")
                    }
                    else {
                      setFilterData(filterData)

                    }
                  }}
                  className="bg-primary-600 text-black border border-black rounded-r-lg p-2.5 hover:bg-primary-700 focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50"
                >
                  <Searchicon />
                </button>
              </div>
            </div>
          </div>
          {filterData.length === 0 && <PopularCuisines />}
          <div className="mx-auto w-[70%] h-[100vh] grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
            {filterData.map((item, index) => (
              <div key={index}>
                {console.log(item)}
                <p>{item.name}</p>
                <img src={item.image} />
              </div>
            ))}
          </div>

        </div>
      </>
    );
  }
}

export default Search;
