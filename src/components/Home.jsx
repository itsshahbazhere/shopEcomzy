import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Product from "./Product";

const API_URL = "https://fakestoreapi.com/products";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);
      setItems(data);
    } catch (err) {
      console.error("network me dikkat hai...");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? <Spinner /> :
     
      items.length > 0 ? 
      (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-6xl p-2 mx-auto pr-7 mb-7">
        {
          items.map((item) => (
            <Product item={item} key={item.id} />
          ))
        }
        </div>) :
        <div className="flex justify-center items-center">
        <p>No Data Found</p>
        </div>
      }
    </div>
  );
};

export default Home;
