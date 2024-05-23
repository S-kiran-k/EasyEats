import { Link } from "react-router-dom";

const Topdishescard = (props) => {
  return (
    <>
      <div className="group relative block overflow-hidden rounded-lg bg-gray-100">
        <Link to={"/restaurant/" + props.index}>
          <img
            src={props.image}
            alt={props.name}
            loading="lazy"
            className="h-60 w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
            -{props.offer}%
          </span>
        </Link>
        <div className="flex flex-col justify-between gap-2 p-4 min-h-40">
          <div>
            <Link
              to={"/restaurant/" + props.index}
              className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
            >
              {props.name}
            </Link>
            <p className="text-sm text-gray-500 lg:text-base">
              {props.description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-600 lg:text-lg">${props.price}</span>
            <span className="text-sm text-red-500 line-through">$39.99</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Topdishescard;



