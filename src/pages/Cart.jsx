import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
export default function Cart() {
  const selectCart = useSelector(state => state.cart);

  const [TotalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      selectCart.reduce((total, item) => {
        return total + item.price;
      }, 0)
    );
  }, [selectCart]);

  return (
    <div className="flex justify-center">
      {TotalAmount > 0 ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {selectCart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="w-[300px]">
            <div className="flex w-510 flex-col justify-center  items-end p5 space-y-5 mt-14">
              <h2 className="font-bold text-lg text-red-800">
                Your cart summary
              </h2>
              <p>
                <span className="text-gray-800 font-bold">
                  Total Amount: {TotalAmount.toFixed(2)}
                </span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">
                  Total Items: {selectCart.length}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80hv] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              Go to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
