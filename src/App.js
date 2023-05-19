import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AvailableProducts from "./components/Categories/AvailableProducts";
import Footer from "./components/Layout/Footer";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./store/CartProvider";
import About from "./pages/About";
import Investors from "./pages/Investors";
import ProductPage from "./pages/ProductPage";

function App() {
  const authCtx = useContext(AuthContext);

  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShowHandler = () => {
    setCartIsShown(true);
  };

  const cartHideHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Layout onShowCart={cartShowHandler}>
        {cartIsShown && <Cart onClose={cartHideHandler} />}
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          {!authCtx.isLogggedIn && (
            <Route path="/auth" element={<AuthPage />} />
          )}
          {authCtx.isLogggedIn && (
            <Route path="/profile" element={<UserProfile />} />
          )}
          {!authCtx.isLogggedIn && (
            <Route path="/profile" element={<AuthPage />} />
          )}
          <Route path="/content/:id" element={<AvailableProducts />} />
          <Route path="products/:type" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Layout>
    </CartProvider>
  );
}

export default App;
