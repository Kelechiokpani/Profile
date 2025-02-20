import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Deep Technology",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Net Apps Tech",
    date: "2023 - Present",
    responsibilities: [
      "facilitating web development concepts.",
      "Engineered scalable, dynamic web applications usingy.",
      "Provide support for my team.",
      "Maintained a strong focus on responsive and cross-browser designs.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Name Coding",
    date: "2024 - Present",
    responsibilities: [
      "Contributed to a large-scale, data-driven application.",
      "Partnered with backend teams on API integration, streamlining and data handling.",
      "Developed reusable components to streamline development,.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
