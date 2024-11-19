import { styles } from "../styles";
import Image from "../../public/girl.png";

const Home = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex items-center justify-center bg-bgcolor`}
    >
      <div className="flex flex-col items-center gap-10 px-10 py-12 lg:flex-row lg:px-12">
        <div className={`flex justify-center items-center w-1/2`}>
          <img className="object-fill" src={Image} />
        </div>

        <div className="text-center text-black lg:w-1/2 lg:text-left lg:pr-8">
          <h1 className={styles.heroSubText}>Aspiring Software Engineer</h1>
          <p className="mt-3">
            I&apos;m{" "}
            <span className={styles.heroSubText}>
              <b>Sofija Lazarova</b>
            </span>
            , a dedicated and enthusiastic software engineering student at the
            Faculty of Computer Science & Engineering in Skopje. With all my
            exams completed, I am on the brink of graduating, ready to step into
            the professional world of software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
