// import { Link } from "react-router-dom"
import { Link } from "react-router-dom"
// import { Searchicon } from "../../assets/Icons" 
import "./Header.css";
import { useState } from "react";
function Header() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      {/* <div className="2xl:container bg-blue-500 ">
        <div className="mx-auto w-[90%]  grid grid-cols-1 md:grid-cols-2 h-[7vh]  ">
          <div id="logo" className="flex justify-start items-center px-4 ">
            <Link to="/" className="bg-green-300"><span className="text-xl">E</span>asy<span className="text-xl">E</span>ats</Link>
          </div>
          {/* <div className="flex justify-center items-center">
                <input type="search" placeholder="Search the item you want" />
                <button type="button">{<Searchicon/>}</button>
            </div> */}
          {/* <div className="flex justify-evenly items-center">
            <Link to="/" className="hover:text-[#FC8019]">Home</Link>
            <Link to="/search" className="hover:text-[#FC8019]">Search</Link>
            <Link to="/about" className="hover:text-[#FC8019]">About</Link>
            <Link to="/login" className="hover:text-[#FC8019]">Login</Link>
            <Link to="/register" className="hover:text-[#FC8019]">Register</Link>
            <Link to="/cart" className="hover:text-[#FC8019]">Cart</Link>
          </div> */}
        {/* </div> */}
    {/* //   </div> */} 
      
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          {/* logo */}
          <div className="bg-yellow-50 flex justify-between md:justify-start md:items-center py-4  ">
            <Link to="/" className="px-5"><span className="text-xl">E</span>asy<span className="text-xl">E</span>ats</Link>
         
            <div>
              {/* Menu Toggle Icon */}
              {show ? (
                <svg
                  onClick={toggle}
                  className="block md:hidden"
                  viewBox="0 0 21 21"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  aria-label="Close menu">
                  <g fill="none" fillRule="evenodd" stroke="currentColor">
                    <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                  </g>
                </svg>
              ) : (
                <svg
                  onClick={toggle}
                  className="block md:hidden"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  aria-label="Open menu">
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
                </svg>
              )}
            </div>
          </div>
          {/* content */}
          <div className={show ? "block" : "hidden md:block"}>
            <ul className="bg-slate-500 flex flex-col justify-evenly items-center md:flex-row md:justify-end gap-4 h-full px-3">
              <li><Link to="/" className="hover:text-[#FC8019]" onClick={toggle}>Home</Link></li>
              <li><Link to="/search" className="hover:text-[#FC8019]" onClick={toggle}>Search</Link></li>
              <li><Link to="/about" className="hover:text-[#FC8019]" onClick={toggle}>About</Link></li>
              <li> <Link to="/login" className="hover:text-[#FC8019]" onClick={toggle}> Login</Link></li>
              <li> <Link to="/register" className="hover:text-[#FC8019]" onClick={toggle}>Register</Link></li>
              <li><Link to="/cart" className="hover:text-[#FC8019]" onClick={toggle}>Cart</Link></li>
  
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header