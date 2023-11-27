// import { useEffect, useState } from "react";
// import { MENU_URL } from "../utils/constants"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCatogery from "./RestaurantCatogery";
import { useState } from "react";

const RestroMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(1);

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

  console.log(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    "itemCards"
  );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (dish) =>
        dish.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories, "categories");

  return (
    <div className="text-center">
      <h1 className="my-4 font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}:{costForTwoMessage}
      </p>
      {/* catgories accordian */}
      {categories.map((catogery, index) => {
        return (
          <RestaurantCatogery
            key={catogery?.card?.card.title}
            data={catogery?.card?.card}
            showList={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestroMenu;
