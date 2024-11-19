import { styles } from "../styles";
import Image from "../../public/galaxia1.png";
import Image1 from "../../public/cinemaApp.png";
import Image2 from "../../public/makeup.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Galaxia courses",
    description:
      "This project aims to provide an introductory platform for users interested in learning about astronomy.",
    website_link: "https://galaxia-courses-website.vercel.app/",
    tech: "Next.js, Supabase, Tailwind CSS",
    image: Image,
  },
  {
    name: "MakeUp App",
    description:
      "In this project, I developed a dynamic and responsive web application that allows users to browse and discover various makeup products from Maybelline. Public API Used: http://makeup-api.herokuapp.com/",
    website_link: "https://galaxia-courses-website.vercel.app/",
    tech: "React, Vite, Tailwind CSS, Axios",
    image: Image2,
  },
];

function Works() {
  return (
    <>
      <div className="pb-20 text-center mx-28 pt-28 lg:text-left">
        <div>
          <p
            className={`${styles.sectionSubText}`}
            style={{ fontSize: "30px" }}
          >
            My work
          </p>
        </div>

        <div className="flex w-full">
          <p className="mt-3 text-[17px] max-w-3xl leading-[30px] text-black">
            The following projects demonstrate my skills and experience through
            practical examples.
          </p>
        </div>

        <div className="flex flex-wrap mt-10 gap-7">
          {projects.map((project) => {
            return <ProjectCard project={project} key={project.name} />;
          })}

          {/* 
          <ProjectCard
            imagePath={Image1}
            name="Cinema App"
            description="This web application enables the sale of movie tickets, utilizing Onion Architecture to maintain a clean and structured codebase."
            github="https://github.com/sofijalazarova/EShopCinemaApp"
            website_link="https://sofija-cinego.azurewebsites.net/"
            tech="C#, HTML, CSS, JavaScript, .NET Core"
          />
          */}
        </div>
      </div>
    </>
  );
}

export default Works;
