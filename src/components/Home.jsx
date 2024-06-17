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

        <div className='w-1/2 text-left text-black pr-8'>
          <h1 className={styles.heroSubText}>Aspiring Software Engineer</h1>
          <p className='mt-3'>I'm Sofija Lazarova, a dedicated and enthusiastic software engineering student at the Faculty of Computer Science & Engineering in Skopje. With all my exams completed, I am on the brink of graduating, ready to step into the professional world of software development.</p>
        </div>        
      </div>
      
    </section>
  )
}

export default Home;