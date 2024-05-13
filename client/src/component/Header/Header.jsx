// import { Link } from "react-router-dom"
import { Link } from "react-router-dom"
// import { Searchicon } from "../../assets/Icons" 
import "./Header.css";
function Header() {
  return (
    <>
      <div className="2xl:container bg-blue-500 ">
        <div className="mx-auto w-[90%]  grid grid-cols-1 md:grid-cols-2 h-[7vh]  ">
          <div id="logo" className="flex justify-start items-center px-4 ">
            <Link to="/" className="bg-green-300"><span className="text-xl">E</span>asy<span className="text-xl">E</span>ats</Link>
          </div>
          {/* <div className="flex justify-center items-center">
                <input type="search" placeholder="Search the item you want" />
                <button type="button">{<Searchicon/>}</button>
            </div> */}
          <div className="flex justify-evenly items-center">
            <Link to="/" className="hover:text-[#FC8019]">Home</Link>
            <Link to="/search" className="hover:text-[#FC8019]">Search</Link>
            <Link to="/about" className="hover:text-[#FC8019]">About</Link>
            <Link to="/login" className="hover:text-[#FC8019]">Login</Link>
            <Link to="/register" className="hover:text-[#FC8019]">Register</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header