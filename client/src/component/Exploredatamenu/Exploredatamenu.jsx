import { Link } from "react-router-dom";

const Exploredatamenu = (props) => {

  return (
    <div className="relative group flex flex-col items-center">
      <Link to={`/menu/${props.menu_name}`}>
        <div className="relative group">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:blur-sm"
            src={props.menu_image}
            alt={props.menu_name}
          />
          <div className="absolute inset-0 flex items-center rounded-full justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg">{props.menu_name}</p>
          </div>
        </div>
      </Link>
      <p className="mt-2 text-gray-800">{props.menu_name}</p>
    </div>
  );
};

export default Exploredatamenu;
