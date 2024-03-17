import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className=" flex flex-col items-center  h-screen w-screen "
    >
      <h2 className="font-semibold text-[40px] gaw 4">About</h2>

      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[5%] pb-[5%] bg-[#D7C94A] p-10">
        <p className="text-white text-[20px]">
          I am a highly creative person, passionate about learning new skills and tackling challenges. My ability to work as a team allows me to collaborate effectively with others, and my problem-solving skills help me deal with obstacles effectively. I am constantly looking for opportunities to apply my creativity and knowledge in challenging projects. I am a teacher-researcher with the ability to reflect and assume critical positions. This drives me to design plans, programs and
 projects with interdisciplinary strategies for social management from an orientation in education
 in formal, non-formal and informal modalities{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
