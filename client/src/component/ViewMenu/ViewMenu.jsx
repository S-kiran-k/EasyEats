import ExploremenudataDetails from "../ExploremenudataDetails/ExploremenudataDetails"

const ViewMenu = () => {
    return (
        <>
            <div className="2xl:container">
                <div className="mx-auto grid grid-cols-1">
                    <div className="w-[80%] mx-auto">
                        <ExploremenudataDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewMenu