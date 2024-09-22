import { Products } from "../utils/utils";
import ProductsHolder from "../components/ProductsHolder";

const ProcuctsHome = () => {
  return (
    <div
      className="w-full flex mt-8 
    justify-center items-center flex-row flex-wrap"
    >
      {[...Products].slice(0, 10).map((item, i) => (
        <div key={i} className="w-full lg:w-1/5">
          <ProductsHolder
            imag={item.img}
            name={item.name}
            newprise={item.price}
            oldprise={item.oldprice}
            rate={item.rate}
            sale={item.forsale}
          />
        </div>
      ))}
    </div>
  );
};

export default ProcuctsHome;
