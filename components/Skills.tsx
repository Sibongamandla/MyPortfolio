import React from "react";
import { skills } from "@/data";

const Skills = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My <span className="text-purple">technical skills</span>
      </h1>

      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 rounded-full backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-10 bg-white-100 border border-white/10 text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
