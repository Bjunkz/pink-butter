'use client'
/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Image from 'next/image'
import '../styles/global.css'
import { Player } from "@kevtucker/react-audio-player-bar";


export default function Home() {
  return (
    <div className='page'>
    <div className='section section1'>
      {/* <h1 className='pink-butter'>PINK BUTTER</h1> */}
      <img className='img-full' src='/000076090021.png' alt="image of pink butter"/>

      
    </div>
    <div className='section section2'>
    <img className='img-full' src='/pink-butter-garden1.png' alt='image of Pink Butter'/>
    </div>
    <div className='section section3'>
    {/* <img className='img-full' src='/background.jpg' alt='background'/> */}
      <div className='bio-text-container'>
        <div className='logo-text-container'>
          <div className='logo-container'>

        <img className="logo" src="/logo.png" alt="" />
          </div>
        <div>
        <p>
        Releasing their debut EP featuring hip hop and rnb legends T3 (Slum Village) and Jermaine Holmes
(D’Angelo, Pete Rock) among others.
        </p>
        <p>Oskar, Björn, Malte and John met during jazz college and have earned a living accompanying the biggest hip
hop and pop artists in Sweden since, but have now decided to create their own project that strive to be
something different.</p>
<p className='quote'>“We made this album by simply playing together live in the studio, to give as much of ourselves as possible
to the music. In the age of sequencing and programming every element of a record, we have chosen to
simply be extra human. It’s the way all of our favorite albums were made.”</p>
        </div>
        <div className='logo-container'>
      <img className="logo" src="/logo.png" alt="" />
      </div>        
  </div>

<div className='player-container'>
      
      <Player       
       source="/audio/Alright.mp3"
        title="Alright"
        artist=""
        artwork="/pink-butter-garden1.png"
        position='right'
        bgColor='#F2B3CA'
        />
      </div>
<div className='player-container'>
      
      <Player       
       source="/audio/Can-we-go-back.mp3"
        title="Can We Go Back"
        artist=""
        artwork="/pink-butter-garden1.png"
        position='right'
        bgColor='#F2A2C0'
        />
      </div>
<div className='player-container'>
      
      <Player       
       source="/audio/Lost-My-Mind.mp3"
        title="Lost My Mind"
        artist=""
        artwork="/pink-butter-garden1.png"
        position='right'
        bgColor='#F294B6'
        />
      </div>
      </div>
      {/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/673862075&color=%23151616&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace:"nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight:" 100"}}><a href="https://soundcloud.com/ghettomusictvv" title="Ghetto Music TV" target="_blank" style={{color: "#cccccc", textDecoration:" none"}}></a> · <a href="https://soundcloud.com/ghettomusictvv/dree-low-x-einar-dag-hammarskjold" title="TITEL HÄR" target="_blank" style={{color: "#cccccc", textDecoration:" none"}}></a></div> */}

    </div>

    </div>
  )
}
