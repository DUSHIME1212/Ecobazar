import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomepageLanding from "./pages/HomepageLanding.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full capitalize">
        <Navbar />
      <Routes>
        <Route path="/" element={<HomepageLanding />}/>
        
      </Routes>
    </div>
  );
}
