import { API_URL } from "../utils/contants";

const RestuarentCard = (props) => {
    const {resData} = props
  
    const {
      cloudinaryImageId,
      costForTwo,
      name,
      cuisines,
      sla 
    } = resData?.info
  
    console.log(resData)
    return (
      <div className="m-4 p-4 bg-gray-200 w-48 shadow-lg rounded-lg transform transition-transform hover:z-10 hover:-translate-y-1 hover:-translate-x-1">
        <img className="rounded-lg" alt="res-logo" src={API_URL+cloudinaryImageId} />
        <h3 className=" font-bold text-lg py-4">{name}</h3>
        <h4>{costForTwo}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{sla.deliveryTime} minutes</h5>
      </div>
    );
  };

  export default RestuarentCard