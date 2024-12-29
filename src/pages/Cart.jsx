import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const selectCart = useSelector(state => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      selectCart.reduce((total, item) => {
        return total + item.price;
      }, 0)
    );
  }, [selectCart]);
  console.log(selectCart, totalPrice);
  return <div className=""></div>;
}
