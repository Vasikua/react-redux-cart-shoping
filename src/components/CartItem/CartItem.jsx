import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slice/cart-slice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className="  flex  items-center justify-between p5 bg-red-500 mt-2 mb-2 rounded-xl ">
      <div className="flex p-3">
        <img className=" h-28 rounded-lg" src={item.image} alt={item.title} />

        <div className="ml-10 self-start space-y-5">
          <h2 className=" font-bold text-white text-xl">{item.title}</h2>
          <p className="text-white font-extrabold">{item.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          Delete from cart
        </button>
      </div>
    </div>
  );
}
