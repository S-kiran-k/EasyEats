import { useRouteError } from "react-router-dom"
function Errorpage() {
    const error = useRouteError();
    console.log(error)
    return (
        <>
            <div className="2xl:container">
                <div className="">
                    <div className="">
                        <p>{error.status}</p>
                        <p>{error.statusText}</p>
                        <p>{error.data}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errorpage