import React from 'react'
import { OverlaySlider } from './framer/OverlaySlider'
import { UtilitiesComponent } from './UtilitiesComponent'

const HeroOverlay = () => {
  return (
    <div className='hidden md:grid md:grid-cols-2 md:gap-6 w-[80%] md:absolute md:z-50  md:translate-x-1/2 md:top-3/4 md:right-1/2'>
        <OverlaySlider />
        <UtilitiesComponent />
    </div>
  )
}

export default HeroOverlay