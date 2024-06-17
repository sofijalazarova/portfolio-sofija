import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Image from '../../public/galaxia1.png';
import Image1 from '../../public/cinemaApp.png';
import GitImage from '../../public/github.png';

const ProjectCard = ( props ) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.75)}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-5 rounded-xl sm:w-[360px] w-full' style={{backgroundColor: "#d1e2f3"}}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={props.imagePath}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}  // link do github
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <a href={props.github}>
              <img 
                src={GitImage}
                alt='source code'
                className='object-contain'                           
              />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{props.name}</h3>
          <p className='mt-2 text-black text-[14px]'>{props.description}</p>
        </div>        
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
    <div className="mx-28 pb-20 pt-28" >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} style={{fontSize: "30px"}}>My work</p>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[17px] max-w-3xl leading-[30px] text-black'
        >
          The following projects demonstrate my skills and experience through practical examples.
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>      
          <ProjectCard imagePath={Image} name="Galaxia courses" description="This web application enables the sale of movie tickets, utilizing Onion Architecture to maintain a clean and structured codebase." github="https://github.com/sofijalazarova/galaxia/tree/main/galaxia"/>
          <ProjectCard imagePath={Image1} name="Cinema App" description="This web application enables the sale of movie tickets, utilizing Onion Architecture to maintain a clean and structured codebase." github="https://github.com/sofijalazarova/EShopCinemaApp"/>
      </div>
      </div>
    </>
  );
};

export default Works;