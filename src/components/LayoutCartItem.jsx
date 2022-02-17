import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/storage";

const LayoutProduct = ({ product, qty }) => {
  const { id, title, image, category, description } = product;
  const dispatch = useDispatch();

  const myStyle = {
    backgroundImage: `url(${image})`,
  };

  const deleteHandler = () => {
    console.log(product);
    dispatch(deleteItem({ product }));
  };

  return (
    <div className="flex flex-row hover:shadow-lg w-72 m-2 p-4 border w-full">
      <div
        className="bg-center bg-contain bg-no-repeat w-full w-24"
        style={myStyle}
      />
      <div className="ml-8 mr-4 md:text-6xl text-xl flex items-center justify-center font-bold text-gray-700">
        {qty}
      </div>
      <div className="px-4 py-2 flex flex-col flex-1">
        <p className="my-2 text-2xl font-bold" to={`product-detail/${id}`}>
          {title}
        </p>
        <p className="text-sm font-light" to={`product-detail/${id}`}>
          {description}
        </p>
        <div className="flex flex-row">
          <div className="border rounded-xl px-2 py-1 text-xs">{category}</div>
        </div>
      </div>
      <button onClick={deleteHandler} type="button" className="text-red-600">
        Eliminar del carrito
      </button>
    </div>
  );
};

export default LayoutProduct;
