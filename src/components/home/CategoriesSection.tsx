import { Link } from "react-router-dom";
import { Smartphone, Shirt, Home, Gamepad, Watch, Sparkles, Baby, Book } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "from-blue-500 to-cyan-500", link: "/products?category=electronics" },
  { name: "Fashion", icon: Shirt, color: "from-pink-500 to-rose-500", link: "/products?category=fashion" },
  { name: "Home & Living", icon: Home, color: "from-orange-500 to-amber-500", link: "/products?category=home" },
  { name: "Gaming", icon: Gamepad, color: "from-purple-500 to-indigo-500", link: "/products?category=gaming" },
  { name: "Watches", icon: Watch, color: "from-teal-500 to-emerald-500", link: "/products?category=watches" },
  { name: "Beauty", icon: Sparkles, color: "from-fuchsia-500 to-pink-500", link: "/products?category=beauty" },
  { name: "Baby & Kids", icon: Baby, color: "from-yellow-500 to-orange-500", link: "/products?category=baby" },
  { name: "Books", icon: Book, color: "from-green-500 to-teal-500", link: "/products?category=books" },
];

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600">Explore millions of products across all categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.link}
                className="group flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-center group-hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
