import { styles } from "../styles";
import Image from "../../public/galaxia1.png";
import Image1 from "../../public/dashboard.png";
import Image2 from "../../public/makeup.png";
import Image3 from "../../public/wildoasis.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "BudgetMate",
    description:
      "BudgetMate is a personal finance app for tracking expenses, managing income, setting savings goals, and planning monthly budgets — all with smart insights and clear visualizations.",
    website_link:
      "https://drive.google.com/file/d/1nIYGDCurbCQR5484gZ4P_eZXlGd0nbcr/view?usp=sharing",
    tech: "Next.js, TypeScript, Spring Boot, Tailwind CSS, PostgreSQL",
    github_link: "https://github.com/sofijalazarova/finance-frontend",
    image: Image1,
  },
  {
    name: "Galaxia courses",
    description:
      "This project aims to provide an introductory platform for users interested in learning about astronomy.",
    website_link: "https://galaxia-courses-website.vercel.app/",
    tech: "Next.js, Supabase, Tailwind CSS",
    github_link: "https://github.com/sofijalazarova/galaxia-courses-website",
    image: Image,
  },
  {
    name: "The Wild Oasis",
    description:
      "Hotel app for employees to manage cabins, bookings, and guest check-ins efficiently. It offers a dashboard with real-time stats, filterable tables, and tools for handling payments, guest preferences, and cabin details.",
    website_link: "https://the-wild-oasis-sofija.netlify.app",
    tech: "React Router, React Query, Context API, React Hook Form, Styled Components",
    github_link: "",
    image: Image3,
  },
  {
    name: "MakeUp App",
    description:
      "In this project, I developed a dynamic and responsive web application that allows users to browse and discover various makeup products from Maybelline. Public API Used: http://makeup-api.herokuapp.com/",
    website_link: "https://sofijalazarova.github.io/makeUpApp/",
    tech: "React, Vite, Tailwind CSS, Axios",
    github_link: "https://github.com/sofijalazarova/makeUpApp",
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
