
const Featured = () => {
  return (
    <div className="flex justify-between rounded-3xl flex-wrap w-full p-4 shadow-lg">
      <div className="p-4 flex items-center">
        <img
          src={"/img/delivery-truck 1.png"}
          className="size-12"
          alt="product1"
        />
        <div className="flex ml-6 flex-col gap-1">
          <span>Free Shipping</span>
          <p className="text-sm opacity-40">Free shipping on all your order</p>
        </div>
      </div>
      <div className="p-4 flex items-center">
        <img src={"/img/headphones 1.png"} className="size-12" alt="product1" />
        <div className="flex ml-6 flex-col gap-1">
          <span>Customer Support 24/7</span>
          <p className="text-sm opacity-40">Instant access to Support</p>
        </div>
      </div>
      <div className="p-4 flex items-center">
        <img src={"/img/shopping-bag.png"} className="size-12" alt="product1" />
        <div className="flex ml-6 flex-col gap-1">
          <span>100% Secure Payment</span>
          <p className="text-sm opacity-40">We ensure your money is save</p>
        </div>
      </div>
      <div className="p-4 flex items-center">
        <img src={"/img/package.png"} className="size-12" alt="product1" />
        <div className="flex ml-6 flex-col gap-1">
          <span>Money-Back Guarantee</span>
          <p className="text-sm opacity-40">30 Days Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
