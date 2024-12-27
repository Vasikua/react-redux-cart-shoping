import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="py-0 px-10">
      <nav className="flex items-center justify-between  h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className=" text-red-900 font-bold  text-xl sm:text-2x1 md:text-3x1 cursor-pointer tracking-wid">
              REACT REDUX SHOPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none gap-50 items-center space-x-6 text-grey-800 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"cart"}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
