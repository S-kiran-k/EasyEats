import { Exploremenudata } from '../../Api/Api'
import Exploredatamenu from '../Exploredatamenu/Exploredatamenu'

const ExploremenudataDetails = () => {
    return (
        <>
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
        </>
    )
}

export default ExploremenudataDetails


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