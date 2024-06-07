import React from 'react'
import Image from '../../public/butterfly1.png'
import { styles } from '../styles';

const Contact = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex justify-center items-center`} style={{backgroundColor: "#f5f5f5"}}>

      <div className='flex items-center justify-center px-12 py-12 gap-10 w-full'>
          <div className='w-1/2 text-right text-black'>
            <h1 className={styles.sectionHeadText}>Get in touch</h1>
            <div>
              <h3 className={styles.sectionSubText}>Contact</h3>
              <h4>sofija.lazarova888@gmail.com</h4>
              <h4>+389 78-825-339</h4>
            </div>
          </div>  
        
          <div className={`flex justify-start items-center w-1/2`}>
            <img className='object-contain h-96' src={Image}/>
          </div>
        
      </div>     
    </section>
  )
}

export default Contact;


