import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomepageLanding from "./pages/HomepageLanding.jsx";
import Footer from "./components/Footer.jsx";
import LoginAuth from "./pages/settings/login.jsx";
import PagenotFound from "./pages/PagenotFound.jsx";
import FAQs from "./pages/FAQs.jsx";
import SignUp from "./pages/settings/signIn.jsx";
import DashBoard from "./pages/settings/DashBoard.jsx";
import AccountSettings from "./pages/settings/settings.jsx";
import BlogList from "./pages/Blog/BlogList.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full capitalize">
      <Navbar />
      <div className="mt-32">
        <Routes>
          <Route path="/" element={<HomepageLanding />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/login" element={<LoginAuth />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
