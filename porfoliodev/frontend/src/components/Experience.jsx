const Experience = () => {
  return (
    <div
      name="Experience"
      className="flex flex-col items-center h-screen w-screen"
    >
      <h2 className="font-semibold text-[40px] gaw 10">Experience</h2>

      <div className="w-screen content-center grid-cols-2 gap-4 grid text-white text-[20px] bg-slate-500 mt-2 p-4">
        <div>
          <p>Factoria F5</p>
          <p className="text-[14px]">Date: [Octuber 2023- Actuality]</p>
        </div>
        <div>
          <p>Developer Web Full Stack</p>
          
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-screen mt-[2%] pt-[2%] pb-[2%] bg-[#615151] p-10">
        <p className="text-white [14px]">
        work on complete projects, from planning to implementation and deployment, demonstrating versatility and strong technical skills. The ability to quickly learn and adapt to new technologies is essential in the world of web development.
        </p>
      </div>
      <div className="w-screen content-center grid-cols-2 gap-4 grid text-white text-[20px] bg-slate-500 mt-2 p-4">
        <div>
          <p>Center in pedagogy</p>
          <p className="text-[14px]">Date: [2017- 2022]</p>
        </div>
        <div>
          <p>Theacher in pedagogy</p>
          
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-screen mt-[2%] pt-[2%] pb-[2%] bg-[#615151] p-10">
        <p className="text-white [14px]">
        Expert in effective communication and interpersonal skills, able to adapt to various learning styles. My commitment to inclusivity is reflected in creating positive and respectful learning environments. Technology integrator in the classroom to improve the learning experience.
        </p>
      </div>
    </div>
    
  );
};

export default Experience;
