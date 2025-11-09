
"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import plantImg from "../../public/plantClinic.jpg";

export default function PlantClinic() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
          Plant Clinic Analysis
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Upload a photo of your plant and get instant AI-powered diagnosis with
          treatment recommendations from our experts
        </p>

        <button className="flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
          <Camera className="w-5 h-5" />
          Diagnose Your Plant
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-end">
        <div className="rounded-lg overflow-hidden ">
          <Image
            src={plantImg}
            alt="Plant analysis example"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
