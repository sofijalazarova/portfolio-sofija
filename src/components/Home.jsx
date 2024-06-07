import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Image from '../../public/girl.png'

const Home = () => {
  return (
    <section className={`relative w-full h-screen mx-auto justify-items-center pt-20`} style={{backgroundColor: "#f5f5f5"}}>

      <div className='flex items-center px-12 py-12 gap-10'>
        <div className={`flex justify-center items-center w-1/2`}>
          <img className='object-fill' src={Image}/>
        </div>

        <div className='w-1/2 text-left text-black'>
          <h1 className={styles.sectionHeadText}>I'm Sofija Lazarova</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit minus aperiam assumenda, sequi ea necessitatibus cupiditate labore officia libero, dolor error harum cum quis laudantium quod inventore dicta at. Doloremque.</p>
        </div>        
      </div>
      
    </section>
  )
}

export default Home;