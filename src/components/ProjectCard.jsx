import GitImage from "../../public/github.png";

function ProjectCard({ project }) {
  const { name, description, tech, website_link, image } = project;

  return (
    <div>
      <div
        className="p-5 rounded-xl lg:w-[360px] w-full lg:h-full"
        style={{ backgroundColor: "#d1e2f3" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            onClick={() => {
              window.location.href(`${website_link}`);
            }}
            src={image}
            alt="project_image"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-center">
            <a href={website_link}>
              <h3 className="text-black font-bold text-[24px]">{name}</h3>
            </a>
            <div className="w-10 h-10 mx-3 rounded-full cursor-pointer card-img_hover black-gradient">
              <a href="#">
                <img
                  src={GitImage}
                  alt="source code"
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          <p className="mt-2 text-black text-[14px]">{description}</p>
          <p className="font-bold text-black">{tech}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
