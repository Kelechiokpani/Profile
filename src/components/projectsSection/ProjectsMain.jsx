import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import p1 from "../../../public/project/nextcouple.png"
import p2 from "../../../public/project/theragist.png"
import p3 from "../../../public/project/netapps.png"
import p4 from "../../../public/project/topProfile.png"
import p5 from "../../../public/project/kreative.png"


const projects = [

  {
    name: "Next Naija Couple",
    align: "left",
    image: p1,
    link: "https://nextnaijacouple.com/",
  },
  {
    name: "Theragist",
    align: "right",
    image: p2,
    link: "https://www.theragist.com/",
  },
  {
    name: "Net Apps Kyc",
    align: "left",
    image: p3,
    link: "#",
  },
  {
    name: "Top Profile",
    align: "right",
    image: p4,
    link: "https://www.toprofile.com/",
  },

  {
    name: "Kreative Digital",
    align: "left",
    image: p5,
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
