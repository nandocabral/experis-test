import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";

import NavUser from "../components/Nav/NavUser";

const mapStateToProps = (carritoState) => {
  const { carrito } = carritoState;
  return { carrito };
};

const LayoutComponent = ({ carrito }) => {
  return (
    <>
      <nav className="w-full px-4 py-2 bg-sky-600 flex items-center">
        <ul className="flex items-center flex-row text-white">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 flex flex-row">
            <Link to="/cart-detail">Cart</Link>
            <div className="bg-red-600 ml-2 text-white p-2 h-6 w-6 rounded-full text-sm flex items-center justify-center">
              {carrito.length}
            </div>
          </li>
        </ul>
        <div className="ml-auto">
          <NavUser />
        </div>
      </nav>

      <main className="mt-4">
        <Outlet />
      </main>
    </>
  );
};

const Layout = connect(mapStateToProps)(LayoutComponent);

export default Layout;
