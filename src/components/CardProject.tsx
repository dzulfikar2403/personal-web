import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";

const CardProject = ({project}: {project: Project}) => {
  return (
    <div
      key={project.id}
      className={`group relative bg-white  min-h-[30rem] flex-1 cursor-pointer`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: `url(${project.url})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative w-full h-full group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black ">
        <div className="transition-all duration-300 flex flex-col h-full justify-center items-center group-hover:text-white">
          <h3 className=" text-8xl">{project.id}</h3>
          <div className="absolute bottom-0 w-full px-4 py-2 ">
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
              <p>{project.name}</p>
              <Link to={project.linkSource} target="_blank" className="self-end" ><SquareArrowOutUpRight size={18} /></Link>
            </div>
            <div className="flex flex-wrap">
              {project?.tech?.map((el) => (
                <img
                  key={el.name}
                  src={el.url}
                  alt={el.name}
                  className="hidden group-hover:block mx-1 w-4 h-4 group-hover:my-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
