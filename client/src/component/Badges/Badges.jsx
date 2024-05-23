
function Badges() {
  return (
    <>
      <div className="2xl:container bg-[#F0F0F5]">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 w-[90%] sm:w-[80%] md:w-[70%] py-3">
          <div className="flex justify-center items-center px-3 text-center md:text-left">
            <p className="text-[#3D4046] font-bold text-[20px] sm:text-[25px]">
              For better experience, download the EasyEats app now
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 mt-3 md:mt-0">
            <img
              className="h-16 sm:h-20"
              src="https://ik.imagekit.io/0oeuxr64bc/Easy%20Eats/google-play-badge.png?updatedAt=1715590963705"
              alt="Google Play Badge"
            />
            <img
              className="h-12 sm:h-14"
              src="https://ik.imagekit.io/0oeuxr64bc/Easy%20Eats/Apple%20badge?updatedAt=1715618083798"
              alt="Apple Badge"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Badges