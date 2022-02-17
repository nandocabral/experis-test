import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addItem } from "../store/actions/index";
import Fetcher from "../utils/Fetcher";
import Loader from "../components/Loader";

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (payload) => dispatch(addItem(payload)),
  };
};

const ProductDetailComponent = ({ addItem }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    async function getProducts() {
      try {
        const res = await Fetcher(`products/${id}`);
        if (isMounted) {
          setProduct(res);
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
  }, [id]);

  const { title, price, description, category, image, rating } = product;

  const changeHandler = (e) => {
    setQty(e.target.value);
  };

  const addToCart = () => {
    addItem({ product, qty });
    navigate("/cart-detail");
  };

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container mx-auto my-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <img src={image} alt="" />
                {/* 
                <div className="flex -mx-2 mb-4">
                  <div className="flex-1 px-2">
                    <button className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                      <span className="text-2xl">1</span>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {title}
              </h2>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {price}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    {category}
                  </p>
                  <div className="ml-auto flex flex-row items-center">
                    <div className="w-4 h-4 bg-yellow-200 mr-2 rounded-full" />
                    <span>{rating.rate}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500">{description}</p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select
                    onChange={changeHandler}
                    className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductDetail = connect(null, mapDispatchToProps)(ProductDetailComponent);

export default ProductDetail;
