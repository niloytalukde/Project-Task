import Hero from "./Components/hero";
import Category from './Components/category';
import FeaturedProduct from "./Components/FeaturedProduct";
import PopularProduct from "./Components/PopularProduct";
import PlantClinic from "./Components/PlantClinic";


export default function Home() {
  return (
    <main className="">
      <Hero />
    <Category />
    <FeaturedProduct/>
    <PopularProduct/>
    <PlantClinic />
      
    </main>
  );
}
