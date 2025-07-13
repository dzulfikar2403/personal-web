import { SquareArrowOutUpRight } from "lucide-react";

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
            <div className="flex justify-between items-center">
              <p>{project.name}</p>
              <SquareArrowOutUpRight size={18} />
            </div>
            <div className="flex gap-3 ">
              {project?.tech?.map((el) => (
                <img
                  key={el.name}
                  src={el.url}
                  alt={el.name}
                  className="hidden group-hover:block w-4 h-4 group-hover:my-2"
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
