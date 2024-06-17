import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div>
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

