import React from 'react'

const Hero = () => {
  return (
  <section
   id="home"
   className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

            <div>
                <div className="flex items-center">
                  <figure className="img-box w-9 h-* rounded-lg"> 
                  <img src="/images/avatar-1.jpg"
                  width={40}
                  height={40}
                  alt="beke hezou portrait"
                  className='image-cover'
                    /> 
                  </figure>

                  <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                   <span className="relative w-2 h-2 rounded-full  bg-emerald-400">
                    <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping">
                    
                    </span>
                   </span>
                    Available for work
                  </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch]">
                  Building Scalable Modern Websites for the Future
                </h2>
                <div className="">
                  ButtonPrimary 

                  buttonOutline
                </div>
            </div>
          <div className="">
            <figure className="">
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
