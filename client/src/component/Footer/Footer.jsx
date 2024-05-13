import { Link } from "react-router-dom";
import Badges from "../Badges/Badges";

function Footer() {
  return (
    <>
      <Badges />
      <div className="2xl:container bg-black h-[70vh]">
        <div className="mx-auto w-[80%] grid grid-cols-1 md:grid-cols-2 h-[70vh]">
          <div className=" flex flex-col justify-center items-center ">
            <div>
              <div className="">
                <Link to="/" className="text-white text-3xl">EasyEats</Link>
              </div>
              <p className="text-white">CopyRights © All rights Reserved 2024 </p>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 py-6 text-white">
            <div className="flex flex-col justify-start items-center py-5">
              <div className="flex flex-col gap-3">
                <p className="font-medium text-[18px]">Company</p>
                <p>About</p>
                <p>Careers</p>
                <p>Team</p>
              </div>
            </div>
            <div className="flex flex-col pl-6 py-5  ">
              <div className="flex flex-col gap-3  ">
                <p className="font-medium text-[18px]">Contact us</p>
                <p>Help & Support</p>
                <p> Partner with us</p>
                <p> Ride with us</p>
              </div>
              <div className=" flex flex-col gap-3 pt-16">
                <p className="font-medium text-[18px]">Legal</p>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
                <p>Investor Relations</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center py-5">
              <div className="flex flex-col gap-4">
                <p className="font-medium text-[18px]">We deliver to:</p>
                <p>Bangalore</p>
                <p>Gurgaon</p>
                <p>Delhi</p>
                <p>Mumbai</p>
                <p>Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
