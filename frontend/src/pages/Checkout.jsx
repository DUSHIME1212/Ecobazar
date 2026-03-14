import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Checkout() {
  const cartItems = [
    {
      id: 1,
      name: "Green Capsicum",
      quantity: 5,
      price: 70.0,
      image:
        "https://images.unsplash.com/photo-1563203362-09419b48995a?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Red Capsicum",
      quantity: 1,
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1589412227349-33166bff3bb0?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const subtotal = 84.0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4 uppercase tracking-widest font-medium">
        <Link to="/" className="hover:text-green-600 transition-colors">
          Home
        </Link>
        <span>&gt;</span>
        <Link
          to="/shopping-cart"
          className="hover:text-green-600 transition-colors"
        >
          Shopping Cart
        </Link>
        <span>&gt;</span>
        <span className="text-gray-900">Checkout</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Forms */}
        <div className="flex-1 space-y-12">
          {/* Billing Information */}
          <section className="space-y-8">
            <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
              Billing Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600 font-medium"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Company Name <span className="text-gray-300">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600 font-medium"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Country / Region
                </label>
                <Select>
                  <SelectTrigger className="w-full h-12 rounded-lg border-gray-200">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="rw">Rwanda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  States
                </label>
                <Select>
                  <SelectTrigger className="w-full h-12 rounded-lg border-gray-200">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="state1">State 1</SelectItem>
                    <SelectItem value="state2">State 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600 font-medium"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600 font-medium"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <Checkbox
                id="different-address"
                className="w-6 h-6 rounded-md border-gray-300 text-green-600 focus:ring-green-600"
              />
              <label
                htmlFor="different-address"
                className="text-sm font-medium text-gray-600"
              >
                Ship to a different address
              </label>
            </div>
          </section>

          {/* Additional Info */}
          <section className="space-y-6 pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
              Additional Info
            </h2>
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                Order Notes (Optional)
              </label>
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="w-full h-32 p-4 rounded-xl border border-gray-200 outline-none focus:border-green-600 font-medium resize-none bg-gray-50/20"
              />
            </div>
          </section>
        </div>

        {/* Right Side: Order Summary & Payment */}
        <aside className="w-full lg:w-[450px] sticky top-36">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-2xl shadow-gray-100/50 space-y-8">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Order Summery
            </h3>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {item.name}{" "}
                      <span className="text-gray-900 font-medium ml-1">
                        x{item.quantity}
                      </span>
                    </span>
                  </div>
                  <span className="font-medium text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-50">
              <div className="flex justify-between items-center text-gray-500 font-medium">
                <span>Subtotal:</span>
                <span className="text-gray-900 font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center text-gray-500 font-medium">
                <span>Shipping:</span>
                <span className="text-gray-900 font-medium">Free</span>
              </div>
              <div className="h-px bg-gray-100"></div>
              <div className="flex justify-between items-center text-xl">
                <span className="text-gray-900 font-extrabold">Total:</span>
                <span className="text-green-600 font-black text-2xl">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <h4 className="text-lg font-extrabold text-gray-900 uppercase tracking-tight">
                Payment Method
              </h4>
              <RadioGroup defaultValue="cod" className="space-y-3">
                <div className="flex items-center space-x-3 p-4 rounded-xl border border-gray-100 hover:border-green-100 hover:bg-green-50/10 transition-all cursor-pointer">
                  <RadioGroupItem
                    value="cod"
                    id="cod"
                    className="text-green-600"
                  />
                  <Label
                    htmlFor="cod"
                    className="flex-1 cursor-pointer font-medium text-gray-700"
                  >
                    Cash on Delivery
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-xl border border-gray-100 hover:border-green-100 hover:bg-green-50/10 transition-all cursor-pointer">
                  <RadioGroupItem
                    value="paypal"
                    id="paypal"
                    className="text-green-600"
                  />
                  <Label
                    htmlFor="paypal"
                    className="flex-1 cursor-pointer font-medium text-gray-700"
                  >
                    Paypal
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-xl border border-gray-100 hover:border-green-100 hover:bg-green-50/10 transition-all cursor-pointer">
                  <RadioGroupItem
                    value="amazon"
                    id="amazon"
                    className="text-green-600"
                  />
                  <Label
                    htmlFor="amazon"
                    className="flex-1 cursor-pointer font-medium text-gray-700"
                  >
                    Amazon Pay
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button className="w-full h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium text-lg shadow-xl shadow-green-100 transition-all transform hover:-translate-y-1">
              Place Order
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
