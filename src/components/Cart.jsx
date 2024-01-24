import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  console.log(cartItems, "cartItems");

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className="p-2 m-2 bg-black text-white rounded-lg"
      onClick={handleClearCart}
      >
        ClearCart
      </button>
      <div className="w-6/12 m-auto bg-slate-200 border-white border-b-2" >
        { cartItems.length === 0 && <h1>Cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
