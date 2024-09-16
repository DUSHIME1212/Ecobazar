import CategoriesHolder from "../components/CategoriesHolder";
import { categories } from "../utils/utils";

const PopularCategories = () => {
  return (
    <div className="flex flex-wrap mt-4 justify-between gap-2 p-4 min-h-[512px] rounded-3xl shadow-lg">
      {categories.map((item, i) => (
        <CategoriesHolder key={i} imag={item.image} title={item.text} />
      ))}
    </div>
  );
};

export default PopularCategories;
