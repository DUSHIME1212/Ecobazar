import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomepageLanding from "./pages/HomepageLanding.jsx";
import Footer from "./components/Footer.jsx";
import LoginAuth from "./pages/settings/login.jsx";
import PagenotFound from "./pages/PagenotFound.jsx";
import FAQs from "./pages/FAQs.jsx";
import SignUp from "./pages/settings/signIn.jsx";
import Shop from "./pages/shop.jsx";
import DashBoard from "./pages/settings/DashBoard.jsx";
import AccountSettings from "./pages/settings/settings.jsx";
import BlogList from "./pages/Blog/BlogList.jsx";
import SingleBlog from "./sections/Blog/SingleBlog.jsx";
import OrderHistory from "./pages/settings/OrderHistory.jsx";
import OrderDetails from "./pages/settings/OrderDetails.jsx";
import About from "./pages/About.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Checkout from "./pages/Checkout.jsx";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { Toaster } from "sonner";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <TooltipProvider>
            <div className="min-h-screen lg:pt-20 w-full capitalize">
              <Navbar />
              <div className="mt-32">
                <Routes>
                  <Route path="/" element={<HomepageLanding />} />
                  <Route path="/FAQs" element={<FAQs />} />
                  <Route path="/login" element={<LoginAuth />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/shopping-cart" element={<ShoppingCart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/:singleblog" element={<SingleBlog />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/order-history" element={<OrderHistory />} />
                  <Route path="/order-details" element={<OrderDetails />} />
                  <Route path="/settings" element={<AccountSettings />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<PagenotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
            <Toaster position="bottom-right" richColors />
          </TooltipProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}
