import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomepageLanding from "./pages/HomepageLanding.jsx";
import Footer from "./components/footer.jsx";
import LoginAuth from "./pages/settings/login.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full capitalize">
        <Navbar />
      <Routes>
        <Route path="/" element={<HomepageLanding />}/>
        <Route path="/profile" element={<LoginAuth/>}  />
      </Routes>
      <Footer />
    </div>
  );
}
