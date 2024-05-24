import { Exploremenudata } from './../../../Api/Api';
import Exploredatamenu from './../../Exploredatamenu/Exploredatamenu';

const PopularCuisines = () => {
  return (
    <>
      <div className="py-6 space-y-2">
        <p className='font-semibold flex justify-center items-center text-2xl'>
          Popular Cuisines  
          </p>
      </div>
      <div className="md:flex md:justify-center md:items-center  gap-5">
        {Exploremenudata.map((data, index) => (
          <Exploredatamenu key={index} menu_name={data.menu_name} menu_image={data.menu_image} />
        ))}
      </div>
    </>
  )
}

export default PopularCuisines


//cardcontext.jsx

// name:
// password:
// age:

//const a = useContext(cardcontext)
//crud
//create
//read
//updat
// a.name