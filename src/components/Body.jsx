import RestuarentCard from "./RestuarentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  const [restuarentList, setRestuarentList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json, "jsonObject");

    //Optional Chaining
    setRestuarentList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Looks Like your are in offline !!!</h1>;
  }

  // conditional rendering
  if (restuarentList && restuarentList.length === 0) {
    return <Shimmer />;
  }

  //restuarentList && restuarentList.length === 0 ? (
  // <Shimmer /> ) :

  return (
    <div className="bg-pink-200">
      <div className="flex items-center justify-center p-2">
        <input
          type="text"
          className="border p-2 mr-2 w-96 rounded-md focus:outline-none focus:ring focus:border-blue-300 "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-orange-400 m-4 rounded-lg"
          onClick={() => {
            // filter the restuarent card and filter the UI
            console.log(searchText, "searchText");
            // Search Text
            const filteredList = restuarentList.filter((res) => {
              console.log(res.info.name, "resInfoName");
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestuarentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
