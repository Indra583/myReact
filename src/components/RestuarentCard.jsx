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
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={API_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{sla.deliveryTime} minutes</h5>
      </div>
    );
  };

  export default RestuarentCard