import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatogery = ({ data, showList, setShowIndex}) => {

    // const [ showList, setShowList] = useState(false);

    const handleClick = () => {
        // setShowList(!showList)
        setShowIndex();
    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-blue-100 p-3 shadow-lg">
        <div className="flex justify-between cursor-pointer"
         onClick={handleClick}
        >
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>&#x2193;</span>  
        </div>
        { showList && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCatogery;
