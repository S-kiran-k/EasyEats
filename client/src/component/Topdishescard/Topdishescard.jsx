
const Topdishescard = (props) => {
  return (
    <>
          <div key={props.index} className="flex flex-col justify-start items-center p-4 max-w-96 bg-white shadow-md rounded-lg">
              <img className="rounded-lg" src={props.image} alt={props.name} />
              <div>
                  <p>{props.name}</p>
                  <p>{props.description}</p>
                  <p>{props.price}</p>
              </div>
          </div>
          
    </>
  )
}

export default Topdishescard