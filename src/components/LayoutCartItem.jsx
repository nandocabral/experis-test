import React from "react";

import { connect } from "react-redux";
import { deleteItem } from "../store/actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (payload) => dispatch(deleteItem(payload)),
  };
};

const LayoutProductComponent = ({ product, qty, deleteItem }) => {
  const { id, title, image, category, description } = product;

  const myStyle = {
    backgroundImage: `url(${image})`,
  };

  const deleteHandler = () => {
    deleteItem(product);
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

const LayoutProduct = connect(null, mapDispatchToProps)(LayoutProductComponent);

export default LayoutProduct;
