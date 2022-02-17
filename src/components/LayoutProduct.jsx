import React from "react";
import { Link } from "react-router-dom";

const LayoutProduct = ({ product }) => {
  const { id, title, image, category, rating } = product;

  const myStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="flex flex-col hover:shadow-lg w-72 m-4 md:p-4 p-2 border">
      <div
        className="bg-center bg-contain bg-no-repeat w-full h-64"
        style={myStyle}
      />
      <hr className="border-b w-full my-2" />
      <div className="px-4 py-2 flex flex-col">
        <Link className="my-4 text-2xl font-bold" to={`product-detail/${id}`}>
          {title}
        </Link>
        <div className="flex flex-row">
          <div className="border rounded-xl px-2 py-1 text-xs">{category}</div>
          <div className="ml-auto flex flex-row items-center">
            <div className="w-4 h-4 bg-yellow-200 mr-2 rounded-full" />
            <span>{rating.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutProduct;
