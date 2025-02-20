import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [

  {
    name: "Next Naija Couple",
    align: "left",
    image: "../../public/project/nextcouple.png",
    link: "https://nextnaijacouple.com/",
  },
  {
    name: "Theragist",
    align: "right",
    image: "../../public/project/theragist.png",
    link: "https://www.theragist.com/",
  },
  {
    name: "Net Apps Kyc",
    align: "left",
    image: "../../public/project/netapps.png",
    link: "#",
  },
  {
    name: "Top Profile",
    align: "right",
    image: "../../public/project/topProfile.png",
    // image: "../../public/images/website-img-4.jpg",
    link: "https://www.toprofile.com/",
  },

  {
    name: "Kreative Digital",
    align: "left",
    image: "../../public/project/kreative.png",
    // image: "../../public/images/website-img-4.jpg",
    link: "https://kreativerock.com",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              // year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
