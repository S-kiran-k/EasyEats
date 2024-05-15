
function Badges() {
  return (
    <>
      <div className="2xl:container bg-[#F0F0F5]">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-[70%] py-3">
          <div className="flex justify-center items-center  px-3 ">
            <p className="text-[#3D4046] font-bold text-[25px]">For better experience,download the EasyEats app now</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img className="h-20" src="https://ik.imagekit.io/0oeuxr64bc/Easy%20Eats/google-play-badge.png?updatedAt=1715590963705" alt="img" />
            <img className="h-14" src="https://ik.imagekit.io/0oeuxr64bc/Easy%20Eats/Apple%20badge?updatedAt=1715618083798" alt="img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Badges