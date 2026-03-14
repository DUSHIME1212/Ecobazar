import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesHolder from "../components/CategoriesHolder";
import { categoryAPI } from "../services/api";
import { Loader2 } from "lucide-react";

const PopularCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryAPI.getAll();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch popular categories", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20 min-h-[512px]">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap mt-4 justify-between gap-2 p-4 min-h-[512px] rounded-3xl shadow-lg">
      {categories.map((item, i) => (
        <Link key={item.id || i} to={`/shop?category=${item.name}`} className="w-full sm:w-1/2 md:w-1/4 lg:w-[16%]">
          <CategoriesHolder 
            imag={item.image || "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=200&auto=format&fit=crop"} 
            title={item.name} 
          />
        </Link>
      ))}
    </div>
  );
};

export default PopularCategories;
