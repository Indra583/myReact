// import { useEffect, useState } from "react";
// import { MENU_URL } from "../utils/contants"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";


const RestroMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //       MENU_URL+resId
  //   );

  //   const json = await data.json();

  //   console.log(json);
  //   setResInfo(json.data);
  // };

  //destructuring

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards, "itemCards");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}:{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCards[0].card.info.name}</li> */}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}
          {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestroMenu;
