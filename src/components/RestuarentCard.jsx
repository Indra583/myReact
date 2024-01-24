import { API_URL } from "../utils/constants";

const RestuarentCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, costForTwo, name, cuisines, sla } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 bg-gray-200 w-48 shadow-lg rounded-lg transform transition-transform hover:z-10 hover:-translate-y-1 hover:-translate-x-1"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={API_URL + cloudinaryImageId}
      />
      <h3 className=" font-bold text-lg py-4">{name}</h3>
      <h4>{costForTwo}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export const withOpenInfo = (RestuarentCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-purple-200 text-white m-2 p-2 rounded-lg z-10">
          {" "}
          IsOpen{" "}
        </label>
        <RestuarentCard {...props} />
      </div>
    );
  };
};

export default RestuarentCard;
