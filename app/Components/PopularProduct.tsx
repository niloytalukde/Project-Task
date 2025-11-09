"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const FeaturedProduct = () => {
  const products = [
    {
      name: "Monstera Deliciosa",
      category: "Indoor Plant",
      price: "2000 – 3,400",
      image: "/monstera.jpg",
      rating: 5,
      reviews: 24,
    },
    {
      name: "Organic Compost Fertilizer",
      category: "Fertilizer",
      price: "60 – 440",
      image: "/fertilizer.jpg",
      rating: 4,
      reviews: 12,
    },
    {
      name: "Pruning Shears",
      category: "Equipment",
      price: "180 – 450",
      image: "/shears.jpg",
      rating: 4,
      reviews: 34,
    },
    {
      name: "Snake Plant",
      category: "Indoor Plant",
      price: "150 – 500",
      image: "/snake-plant.jpg",
      rating: 4,
      reviews: 35,
    },
    {
      name: "Snake Plant",
      category: "Indoor Plant",
      price: "150 – 500",
      image: "/snake-plant.jpg",
      rating: 4,
      reviews: 35,
    },
  ];

  return (
    <section className=" py-20 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Popular Products
        </h2>
        <p className="text-[#2D5016] mt-2">Discover our most popular gardening essentials</p>
      </div>

      <Carousel
        responsive={responsive}
        ssr
        infinite={false}
        containerClass="!m-0"
        itemClass="px-[30px]" 
      >
        {products.map((product, i) => (
          <div
            key={i}
            className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/*  Image */}
            <div className="relative w-full h-[220px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
              />

             
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col grow justify-between text-left transition-opacity duration-500 group-hover:opacity-75">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-orange-600 font-bold mt-2 text-base">
                  ৳ {product.price}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={index < product.rating ? "#FBBF24" : "none"}
                      stroke="#FBBF24"
                    />
                  ))}
                  <span className="text-gray-500 text-xs ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <button className="mt-4 flex text-center mx-auto bg-[#2D5016] text-white text-sm font-medium py-2 px-20 w-full rounded-md  ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProduct;
