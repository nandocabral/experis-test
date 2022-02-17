import { useEffect, useState } from "react";
import Fetcher from "../utils/Fetcher";
import LayoutProduct from "../components/LayoutProduct";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function getProducts() {
      try {
        const res = await Fetcher("products");
        if (isMounted) {
          setProducts(res);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex items-start flex-wrap justify-around">
          {products.map((product) => (
            <LayoutProduct product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
