// import { useState } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import About from './components/About'
// import Hero from './components/Hero'
// import Works from './components/Works'
// import Feedbacks from './components/Feedbacks'
// import Experience from './components/Experience'
// import Tech from './components/Tech'
// import Contact from './components/Contact'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className='relative z-0 bg-primary'>
//         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//           <Navbar />
//           <Hero />
//         </div>
//         <About/>
//         <Experience />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className='relative z-0'>
//           <Contact />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <section id="home"><Home /></section>
          
        </div>
        {/* <section id="about">
          <About />
        </section> */}
        
        <section id="work" style={{backgroundColor: "#608ac7"}}>
          <Works/>
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

