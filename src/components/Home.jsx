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
          <h1 className={styles.heroSubText}>Software Engineer</h1>
          <p className="mt-3">
            I&apos;m{" "}
            <span className={styles.heroSubText}>
              <b>Sofija Lazarova</b>
            </span>
            , a passionate and dedicated software engineer who recently
            graduated from the Faculty of Computer Science & Engineering in
            Skopje. With my degree completed, I am excited to step fully into
            the professional world of software development and take on new
            challenges in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
