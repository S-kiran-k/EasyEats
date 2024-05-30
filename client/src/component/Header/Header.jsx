import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import Cartcontext from "../../context/Cartcontext";

function Header() {
  const data = useContext(Cartcontext);
  const { cartData } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#DE6E1B]">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth={2}
              strokeLinecap="round"
              strokeMiterlimit={10}
              stroke="currentColor"
              fill="none"
            >
              <rect x={3} y={1} width={7} height={12} />
              <rect x={3} y={17} width={7} height={6} />
              <rect x={14} y={1} width={7} height={6} />
              <rect x={14} y={11} width={7} height={12} />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              EasyEats
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Home"
                title="Home"
                className="font-medium hover:text-[#FC8019] tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                aria-label="Search"
                title="Search"
                className="font-medium hover:text-[#FC8019] tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Search
              </Link>
            </li>
           
            <li>
              <Link
                to="/about"
                aria-label="About us"
                title="About us"
                className="font-medium hover:text-[#FC8019] tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                aria-label="Cart"
                title="Cart"
                className="font-medium hover:text-[#FC8019] tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                <div className="flex items-center justify-center">
                  <svg
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="text-4xl mr-2"
                  >
                    <path d="M8.5 19a1.5 1.5 0 101.5 1.5A1.5 1.5 0 008.5 19zM19 16H7a1 1 0 010-2h8.491a3.013 3.013 0 002.885-2.176l1.585-5.55A1 1 0 0019 5H6.74A3.007 3.007 0 003.92 3H3a1 1 0 000 2h.921a1.005 1.005 0 01.962.725l.155.545v.005l1.641 5.742A3 3 0 007 18h12a1 1 0 000-2zm-1.326-9l-1.22 4.274a1.005 1.005 0 01-.963.726H8.754l-.255-.892L7.326 7zM16.5 19a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z" />
                  </svg>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full" id="lblCartCount"> {cartData.length}</span>
                </div>


              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="inline-flex hover:text-[#FC8019] items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-orange-300 bg-orange-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="register"
                title="register"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="inline-flex hover:text-[#FC8019] items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-orange-300 bg-orange-400 focus:shadow-outline focus:outline-none"
                aria-label="Login"
                title="Login"
              >
                Login
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={toggleMenu}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          EasyEats
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={toggleMenu}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={toggleMenu}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/search"
                          aria-label="Search"
                          title="Search"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={toggleMenu}
                        >
                          Search
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="About"
                          title="About"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cart"
                          aria-label="Cart"
                          title="Cart"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={toggleMenu}
                        >
                          Cart
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-300 bg-orange-400 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Login"
                          title="Login"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
