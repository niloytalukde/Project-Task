import Image from "next/image";

const Category = () => {
  const categories = [
    {
      title: "Plants",
      description: "Indoor & Outdoor Plants for every space",
      icon: "/Potted Plant.svg",
    },
    {
      title: "Medicine",
      description: "Natural Plant Care Solutions",
      icon: "/Earth Care.svg",
    },
    {
      title: "Equipment",
      description: "Professional Gardening tools",
      icon: "/Equipment.svg",
    },
    {
      title: "Fertilizers",
      description: "Safe & effective plant protection",
      icon: "/Fertilizers.svg",
    },
  ];

  return (
    <section className="pt-10 pb-[100px] bg-[#fdfdf8]">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
          Shop by Category
        </h2>
      </div>

      {/* Category Cards */}
      <div className="flex justify-center flex-wrap gap-8 sm:gap-12 md:gap-20 px-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="w-40 sm:w-[200px] md:w-[250px] bg-[#f6f7e8] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon  */}
            <div className="bg-white rounded-full p-4 sm:p-5 md:p-6 flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
              <Image
                src={cat.icon}
                alt={cat.title}
                width={45}
                height={45}
                className="object-contain w-[35px] sm:w-[45px] md:w-[50px]"
              />
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg md:text-xl text-black font-semibold mb-1 sm:mb-2">
              {cat.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-snug">
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
