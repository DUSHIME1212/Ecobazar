import { useEffect, useState } from "react";
import ProductsHolder from "../components/ProductsHolder";
import { productAPI } from "../services/api";
import { Loader2 } from "lucide-react";

const ProcuctsHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productAPI.getAll({ limit: 10 });
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch home products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div
      className="w-full flex mt-8 
    justify-center items-center flex-row flex-wrap"
    >
      {products.map((item, i) => (
        <div key={item.id || i} className="w-full lg:w-1/5">
          <ProductsHolder
            id={item.id}
            imag={item.image || ""}
            name={item.name}
            newprise={item.price}
            oldprise={item.oldPrice}
            rate={item.rating}
            sale={item.oldPrice ? "Sale 50%" : null}
          />
        </div>
      ))}
    </div>
  );
};

export default ProcuctsHome;
