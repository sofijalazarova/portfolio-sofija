import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Image from '../../public/galaxia1.png';
import Image1 from '../../public/cinemaApp.png';
import GitImage from '../../public/github.png';
import Image2 from '../../public/makeupapp.png';

const ProjectCard = ( props ) => {
  return (
    <div>
      <div className='p-5 rounded-xl lg:w-[360px] w-full lg:h-full' style={{backgroundColor: "#d1e2f3"}}>
        <div className='relative w-full h-[230px]'>
          <img onClick={() => { window.location.href(`${props.website_link}`)}}
            src={props.imagePath}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'/>
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
          <a href={props.website_link}><h3 className='text-black font-bold text-[24px]'>{props.name}</h3></a>
          <p className='mt-2 text-black text-[14px]'>{props.description}</p>
          <p className="text-black font-bold">{props.tech}</p>
        </div>        
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
    <div className="mx-28 pb-20 pt-28 text-center lg:text-left">
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} style={{fontSize: "30px"}}>My work</p>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-[17px] max-w-3xl leading-[30px] text-black'>
          The following projects demonstrate my skills and experience through practical examples.
        </p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>      
          <ProjectCard imagePath={Image} name="Galaxia courses" description="This project aims to provide an introductory platform for users interested in learning about astronomy." github="https://github.com/sofijalazarova/galaxia/tree/main/galaxia" website_link="https://sofijalazarova.github.io/galaxia/" tech="Spring Boot, React, Vite, Tailwind CSS, PostgreSQL"/>
          <ProjectCard imagePath={Image1} name="Cinema App" description="This web application enables the sale of movie tickets, utilizing Onion Architecture to maintain a clean and structured codebase." github="https://github.com/sofijalazarova/EShopCinemaApp" website_link="https://cinego-sofija.azurewebsites.net/" tech="C#, HTML, CSS, JavaScript, .NET Core"/>
          <ProjectCard imagePath={Image2} name="MakeUp App" description="In this project, I developed a dynamic and responsive web application that allows users to browse and discover various makeup products from Maybelline. Public API Used: http://makeup-api.herokuapp.com/" github="https://github.com/sofijalazarova/makeUpApp" website_link="https://sofijalazarova.github.io/makeUpApp/" tech="React, Vite, Tailwind CSS, Axios"/>
      </div>
      </div>
    </>
  );
};

export default Works;