import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return( <section className="hero">
    <div className="hero-center">
    <article className='hero-info'>
      <h1>
        Payments infrastructures for the internet
      </h1>
      <p>
        Millions of components of all sized-from startups to fortune 500s-use Stripe's software and API's to accept payements, send payouts, and manage their business online
      </p>
      <button className='btn'>start now</button>
    </article>
    <article className="hero-images">
      <img src={phoneImg} className='phone-img' alt="phone" />
    </article>
    </div>
  </section>)
}

export default Hero
