import { OverlaySlider } from './framer/OverlaySlider.tsx'
import { UtilitiesComponent } from './UtilitiesComponent.tsx'

const HeroOverlay = () => {
  return (
    <div className='hidden md:grid md:grid-cols-2 md:gap-6 md:w-[93%] lg:w-[80%] md:absolute md:z-50  md:translate-x-1/2 md:-bottom-[89px] md:right-1/2'>
        <OverlaySlider />
        <UtilitiesComponent />
    </div>
  )
}

export default HeroOverlay