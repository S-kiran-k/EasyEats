import { Searchicon } from "../../assets/Icons";

function Search() {
  return (
    <>
      <div className="2xl:container py-10">
        <div className="mx-auto w-[70%] h-[100vh]  ">
          <div className="flex flex-col ">
            <div className="flex">
              <input
                type="search"
                placeholder="Search..."
                className="border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-xl"
              />
              <button className="bg-primary-600 text-black border border-black rounded-r-lg p-2.5 hover:bg-primary-700 focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50">
                <Searchicon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
