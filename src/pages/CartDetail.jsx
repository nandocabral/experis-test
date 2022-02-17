import { useState } from "react";
import { connect } from "react-redux";

import LayoutCartItem from "../components/LayoutCartItem";

const mapStateToProps = (carritoState) => {
  const { carrito } = carritoState;
  return { carrito };
};

const CartDetailComponent = ({ carrito }) => {
  const [model, setModel] = useState({});

  const valueHanlder = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setModel((values) => ({ ...values, [name]: value }));
  };

  const submitHanlder = (event) => {
    event.preventDefault();
    console.log(model);
  };

  return (
    <div className="container mx-auto my-8 justify-center flex md:flex-row flex-col">
      <div className="flex flex-col flex-1 m-2">
        {carrito.length === 0 && (
          <p className="text-center">No hay productos en el carrito :(</p>
        )}
        {carrito.length > 0 &&
          carrito.map(({ product, qty }) => (
            <LayoutCartItem product={product} qty={qty} key={product.id} />
          ))}
      </div>
      {carrito.length > 0 && (
        <div className="m-2 border p-4 mt-4">
          <form onSubmit={submitHanlder} className="flex flex-col">
            <div className="flex flex-col my-2">
              <label className="mb-2">Enter your name: *</label>
              <input
                type="text"
                name="username"
                className="border px-4 py-2 w-full focus:outline-none"
                value={model.username || ""}
                onInput={valueHanlder}
                required
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="mb-2">Enter your email: *</label>
              <input
                type="mail"
                name="email"
                className="border px-4 py-2 w-full focus:outline-none"
                value={model.email || ""}
                onInput={valueHanlder}
                required
              />
            </div>
            <button className="px-4 w-full mt-6 py-4 text-center text-white bg-sky-600">
              Comprar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const CartDetail = connect(mapStateToProps)(CartDetailComponent);

export default CartDetail;
