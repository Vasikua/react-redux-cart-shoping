import { useEffect, useState } from "react";
import Item from "../components/Item/Item";
import { Circles } from "react-loader-spinner";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchProductList() {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
      if (result) {
        setData(result);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={50}
            width={50}
            color="rgb(90, 233, 38)"
            visible={true}
          />
        </div>
      ) : null}
      {error ? <p>somthing went wrong try whan more time </p> : null}
      <ul>
        {!loading &&
          !error &&
          data.map(item => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
