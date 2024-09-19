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

export default function App() {
  return (
    <div className="min-h-screen w-full capitalize">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomepageLanding />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/login" element={<LoginAuth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PagenotFound />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
      <Footer />
    </div>
  );
}
