import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Jenny Wilson",
      role: "Ceo & Founder",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Jane Cooper",
      role: "Worker",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Cody Fisher",
      role: "Security Guard",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Robert Fox",
      role: "Senior Farmer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-medium leading-tight text-gray-900">
            100% Trusted <br />
            <span className="text-green-600">Organic Food Store</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Morbi cursus porttitor enim lobortis molestie. Pellentesque eu nibh
            eget mauris congue mattis mattis nec tellus. Phasellus imperdiet
            elit eu magna. Donec ac elementum.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
            alt="Organic Food"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 grid grid-cols-2 gap-8 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-medium">
                1
              </div>
              <h3 className="font-medium text-xl">100% Organic Food</h3>
              <p className="text-sm text-gray-500">
                100% healthy & Fresh food.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-medium">
                2
              </div>
              <h3 className="font-medium text-xl">Customer Feedback</h3>
              <p className="text-sm text-gray-500">
                Our customer happiness is our first priority.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-medium">
                3
              </div>
              <h3 className="font-medium text-xl">Free Shipping</h3>
              <p className="text-sm text-gray-500">
                Free shipping with discount.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-medium">
                4
              </div>
              <h3 className="font-medium text-xl">100% Organic Food</h3>
              <p className="text-sm text-gray-500">
                100% healthy & Fresh food.
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl font-medium text-gray-900 leading-tight">
              We Delivered, You Enjoy Your Order.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <ul className="space-y-4">
              {[
                "Checkmarks for healthy food",
                "Premium quality products",
                "Modern delivery system",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 font-medium text-gray-800"
                >
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/shop"
              className="inline-block bg-green-600 text-white rounded-full px-10 py-4 font-medium text-lg hover:bg-green-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-200"
            >
              Shop Now ➜
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-medium text-gray-900">
            Our Awesome Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-medium text-xl text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-sm italic">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-24 mb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-medium text-gray-900">
              Client Testimonials
            </h2>
            <div className="flex gap-2">
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-green-500 hover:text-green-500 transition-all font-medium">
                ←
              </button>
              <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white transition-all font-medium">
                →
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm space-y-6"
              >
                <div className="text-green-500 text-4xl">❝</div>
                <p className="text-gray-600 leading-relaxed italic">
                  "Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna. Donec ac elementum.
                  Integer sed libero finibus."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h5 className="font-medium text-gray-900">Robert Fox</h5>
                    <p className="text-gray-400 text-xs">Customer</p>
                  </div>
                  <div className="ml-auto text-orange-400 flex">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
