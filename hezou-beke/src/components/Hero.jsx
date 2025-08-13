import React from 'react'
import { ButtonPrimary } from './Button'
const Hero = () => {
  return (
  <section
   id="home"
   className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

            <div>
                <div className="flex items-center gap-3">
  <figure className="w-9 h-9 rounded-lg overflow-hidden"> 
    <img 
      src="/images/avatar-1.jpg"
      width={40}
      height={40}
      alt="Beke Hezou portrait"
      className="object-cover w-full h-full"
    /> 
  </figure>

  <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
    </span>
    Available for work
  </div>
</div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                  Building Scalable Modern Websites for the Future
                </h2>
                <div className="flex items-center gap-3">
                  <ButtonPrimary
                  label="Download CV"
                  icon="download"
                  />

                  buttonOutline
                </div>
            </div>
          <div className="hidden lg:block">
            <figure className="w-ful max-[480px] ml-auto bg-gradient-to-t from-sky-400 via-50%
            via-sky-400/40 to-65% rounded-[60px] overflow-hidden
            ">
              <img
              src="/images/hero-banner.png" 
              width={656}
              height={800}
              alt="hèzou beke" 
              className="w-full" 
              />
            </figure>
          </div>
        </div>
        
    </section>
  )
}

export default Hero
