/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import '../styles/global.css'

export default function Home() {
  return (
    <div className='page'>
    <div className='section section1'>
      <h1 className='pink-butter'>PINK BUTTER</h1>
      <img className='img-full' src='/pink-butter-garden1.jpg' alt='image of Pink Butter'/>
      
    </div>
    <div className='section section2'>
    <img className='img-full' src='/pink-butter-waterslide.png'/>
    </div>
    <div className='section section3'>
      <div className='bio-text-container'>
        <p>
        Releasing their debut EP featuring hip hop and rnb legends T3 (Slum Village) and Jermaine Holmes
(D’Angelo, Pete Rock)
        </p>
        <p>Oskar, Björn, Malte and John met during jazz college and have earned a living accompanying the biggest hip
hop and pop artists in Sweden since, but have now decided to create their own project that strive to be
something different.</p>
<p>“We made this album by simply playing together live in the studio, to give as much of ourselves as possible
to the music. In the age of sequencing and programming every element of a record, we have chose to
simply be extra human. It’s the way all of our favorite albums were made.”</p>
      </div>
      <div>LÄNK TILL LÅT 1</div>
      <div>LÄNK TILL LÅT 2</div>
    </div>
    </div>
  )
}
