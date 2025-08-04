import React from 'react'

const Hero = () => {
  return (
  <section
   id="home"
   className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center">

            <div>
                <div className=''>
                  <figure>
                  <img src="/images/avatar-1.jpg"
                  width={40}
                  height={40}
                  alt="beke hezou portrait"
                  className='image-cover'
                    /> 
                  </figure>
                  <div className=''>
                   <span className=''>
                    <span className=''></span>
                   </span>
                    Available for work
                  </div>
                </div>
                <h2 className="">
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
