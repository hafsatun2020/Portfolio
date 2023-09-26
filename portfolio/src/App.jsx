import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Card from './card'
import hafsat from './images/pic-h31.jpg'
function App() {

  const cardArr = data.map( card => <Card
    key={card.id}
    img={card.img}
    tag={card.tag}
    
    />)
  return (
    <>
     <header>
        <nav>
          <h1>Hafsat Nasidi</h1>
          <ul>
            <a href="#about"><li>About</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#contact"><li>Contact Me</li></a>
          </ul>
        </nav>
        
      </header>    
      <main>
          <section id='about'> 
          <img src={hafsat} alt="hafsat nasidi" />
            <h1>Hi I am Hafsat</h1>
            <p>I am dabbling in web development</p>
          </section>
          <section id='projects'> 
            <h2>These are my projects</h2>
            <div className='project'>
            {cardArr}


            </div>
            </section>
            <section id='contact'> 
            <div className='left'>
            <h1>Contact ME</h1>
                <p>I would love to here what you have to  say! I will reply as soon as i can!
                 </p>
                
            </div>
            
                <div className='right'>
                  <input type="text" name='fullname' placeholder="Name" />
                  <input type="email" name='email' placeholder="Email" />
                  <textarea name="Message" id="" cols="30" rows="10"placeholder='Message'></textarea>
                  <button type='button'>Send Message</button>
                </div>
            </section>
        </main> 
        <footer>
          <h1>Hafsat Nasidi</h1>
          <div className='icons'>
        <a href="https://hafsatnasidi.hashnode.dev/"><i className="fa-brands fa-hashnode"></i></a>
        <a href="https://mobile.twitter.com/hafsatuuN"><i className="fa-brands fa-twitter"></i></a>
        <a href="github.com/hafsatun2020"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/hafsat-nasidi-54a56164/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
          </footer>  
    </>
  )
}

export default App
