import { useRouteError } from "react-router-dom"
function Errorpage() {
    const error = useRouteError();
    console.log(error)
    return (
        <>
            <div className="bg-black py-6 sm:py-8 lg:py-12 h-[100vh] flex items-center">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8 w-full">
                    <div className="grid gap-8 sm:grid-cols-2 h-full items-center">
                        <div className="flex flex-col items-center justify-center sm:items-start">
                            <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
                                {error.status || "Error 404"}
                            </p>
                            <h1 className="mb-2 text-center text-2xl font-bold text-gray-100 sm:text-left md:text-3xl">
                                {error.statusText || "Page not found"}
                            </h1>
                            <p className="mb-8 text-center text-gray-400 sm:text-left md:text-lg">
                                {error.data || "The page you’re looking for doesn’t exist."}
                            </p>
                            <a
                                href="/"
                                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                            >
                                Go home
                            </a>
                        </div>
                        <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-full">
                            <img
                                src="https://ik.imagekit.io/0oeuxr64bc/404.gif?updatedAt=1716314762011"
                                loading="lazy"
                                alt="Error Image"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errorpage