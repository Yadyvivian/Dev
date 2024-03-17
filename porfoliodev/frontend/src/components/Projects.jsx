
import React, { useEffect, useState } from "react";
import projectImage from "../assets/project.jpg";

const Projects = () => {
  const projects = [
    {
      description:
        "Book-Swap, is a project that contributes to the purchase, sale and exchange of books from the Game of Thrones saga.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/Yadyvivian/book-ecommerce",
      deployLink: "",
    },
    {
      description:
        "To-Do List, App with Login In this notepad users can add tasks, modify their description and mark them as completed. Aimed at boys and girls who are immersed in programming logic.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/Yadyvivian/TO-DO-LIST",
      deployLink: "https://yadyvivian.github.io/TO-DO-LIST/",
    },
    {
      description:
        "Duck-Roulette, is an exciting virtual game that combines the excitement of Russian roulette with the cuteness of rubber ducks. In this game, participants come together and compete to see who will be the last duckling in the pool at the end of the round.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/Yadyvivian/Duck-roulette",
      deployLink: "https://yadyvivian.github.io/Duck-roulette/",
    },
  ];

  return (
    <div
      name="Projects"
      className="h-screen w-screen flex items-center flex-col"
    >
      <h2 className="font-semibold text-[40px]">Projects</h2>
      <div className="gap-4 mt-4 grid grid-cols-3 md:grid-cols-1">
        {projects.map((p) => (
          <div className="relative w-[300px] h-[300px]  border-red-100 border-spacing-1 border p-2 bg-slate-400 ">
            <img className="object-cover " src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col  p-4 absolute  backdrop-blur hover:backdrop-blur-[20px]  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white">{p.description}</p>
              <div className="flex">
                <a href={p.githubLink}>Github</a>
                <a className="ml-4" href={p.deployLink}>
                  Deploy
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
