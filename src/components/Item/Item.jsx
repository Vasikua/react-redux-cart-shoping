import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slice/cart-slice";

export default function Item({ item }) {
  const selectCart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className=" group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl ">
      <div className="h-[180px]">
        <img
          className="object h-full w-full"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div>
        <h2 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          {item.title}
        </h2>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <button
          onClick={
            selectCart.some(items => items.id === item.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          {selectCart.some(items => items.id === item.id)
            ? "Delete from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
