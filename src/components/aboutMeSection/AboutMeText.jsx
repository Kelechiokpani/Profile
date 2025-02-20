import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
          Hi, I’m Emmanuel Kelechi Okpani, a frontend developer passionate about building intuitive and high-performance web
          applications. I specialize in modern JavaScript frameworks like React.js and Next.js, with experience in TypeScript,
          Tailwind CSS, Redux, and API integrations.
          Over the past few years, I’ve worked on projects focusing on creating responsive, scalable, and accessible user interfaces.
          In my recent role, I developed features that improved user engagement and collaborated closely
          with backend teams to integrate APIs efficiently
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
