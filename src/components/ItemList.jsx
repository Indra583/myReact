import { addItems } from "../utils/cartSlice";
import { API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  handleAddItems = (item) => {
    dispatch(addItems(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 my-2 border-white border-b-2 text-left flex"
        >
          <div className="w-9/12">
          <div className="p-2 font-semibold">
            <span>{item.card.info.name}</span>
            <span>:₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price/100}</span>
          </div>
          <p className="p-2 text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className=" p-1 mx-[110px] bg-black text-white rounded-lg shadow-lg"
               onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
          <img  src={API_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
