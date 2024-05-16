import { Link } from "react-router-dom"

const Topdishescard = (props) => {
  return (
    <>
      <div key={props.index} className="flex flex-col justify-start items-center p-4 max-w-96 bg-white shadow-md rounded-lg">
        <img className="rounded-lg" src={props.image} alt={props.name} />
        <div className="space-y-3">
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p className="font-bold">Price: {props.price}$</p>
          <Link to={"/restaurant/" + props.id}>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Topdishescard