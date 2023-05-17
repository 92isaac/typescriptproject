
import HeroOverlay from "../HeroOverlay";
import HeroSection from "../../route/HeroSection";



export default function SliderComponent() {
  return (
    <div className="-z-10 md:relative">
      <HeroOverlay />
      <HeroSection />
    </div>
  );
}
