import React from 'react'

const HeroDisplay = () => {
  return (
    <section className='w-full min-h-screen bg-red-50'>
      
      <video
        autoPlay
        muted
        loop
        className='absolute  w-full h-full object-cover'
        >
          <source src='/hero.webm' type='video/webm' />
        </video>

    </section>
  )
}

export default HeroDisplay