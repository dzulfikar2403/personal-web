import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Minimize,
  Phone
} from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import { listProjects, listTech } from "./constant/data";
import Navbar from "./components/Navbar";
import CardProject from "./components/CardProject";

function App() {
  const [isTech, setIsTech] = useState("Language");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="w-full font-ibm_plex_sans">
      <Navbar />
      <section id="hero" className="relative pt-10 md:pt-20">
        <div className="absolute -z-1 top-1/2 left-2 md:left-20 -translate-y-1/2 size-10 md:size-30 bg-primary rounded-2xl blur-3xl"></div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between"
        >
          <div className="px-4 md:px-0 flex-1 space-y-4">
            <h1 className=" text-4xl ">
              Hi, Im Dzulfikar. <br /> a <b>Web Developer</b> <br /> Based on{" "}
              <b>Indonesia</b>
            </h1>
            <p>
              as a Web developer, i created the website with my favorite tech
            </p>
            <div className="flex gap-6 items-center">
              <button
                type="button"
                className="bg-black rounded px-4 py-1 text-white"
              >
                Contact
              </button>
              <div className="flex gap-4">
                <Github size={18} />
                <Linkedin size={18} />
              </div>
            </div>
            <small className="flex items-center gap-1">
              <Minimize size={14} />
              <p>still-learning </p>
            </small>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="flex-1 ">
            <div className="relative w-2/4  mx-auto">
              <img
                src="/dzul.png"
                alt="dzull"
                className="relative size-full "
              />
              <img
                src="/Regular_blob_1.png"
                alt="blob"
                className="absolute -top-8 size-10 sm:size-15 animate-up-and-down"
              />
              <img
                src="/Regular_blob_2.png"
                alt="blob"
                className="absolute bottom-0 -left-4 size-10 sm:size-15 animate-up-and-down "
              />
              <img
                src="/Regular_blob_3.png"
                alt="blob"
                className="absolute bottom-0 -right-4 size-10 sm:size-15 animate-up-and-down "
              />
              <img
                src="/Regular_blob_4.png"
                alt="blob"
                className="absolute top-4 -right-10 size-10 sm:size-15 animate-up-and-down"
              />
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto text-sm pt-28">
          <span data-aos="zoom-in">Was Working at</span>
          <div data-aos="zoom-in" className="flex justify-center gap-2 ">
            <img
              src="/infradigital_nusantara_logo.png"
              alt="IDN"
              className="size-15"
            />
          </div>
        </div>
      </section>
      <section className="relative min-h-screen py-20 overflow-hidden">
        <div className="absolute -z-1 top-1/2 right-2 md:-right-10 -translate-y-1/2 size-10 md:size-60 bg-primary rounded-2xl blur-[60px]"></div>
        <div className="max-w-4xl mx-auto space-y-40">
          {/* <div className="absolute -z-1 w-full shadow bg-slate-500 h-10"></div> */}
          <section
            data-aos="fade-up"
            id="about"
            className="w-full px-8 py-4 rounded shadow bg-white flex flex-col md:flex-row"
          >
            <div className="w-full md:w-[40%]">
              <h2 className="text-4xl ">
                Introducing is a <br />
                good sulution
              </h2>
              <img src="/git-ilustator.png" alt="ilst" className="w-40 my-4" />
            </div>
            <div className="flex-1">
              <p>
                I am a graduated student from Vocational High School, majoring
                in Software Engineering. I have over one year of experience in
                JavaScript programming and have worked with modern web
                technologies like Next.js & postgresQL. <br /> <br />I am
                passionate about building web applications, solving query,
                learning new technologies, and improving my coding skills.
                Always eager to take on new challenges and grow as a developer!{" "}
              </p>
            </div>
          </section>
          <section
            data-aos="fade-up"
            id="tech"
            className="w-full px-8 py-4 rounded shadow bg-white flex flex-col md:flex-row"
          >
            <div className="flex-1">
              <h2 className="text-4xl ">
                What’s Tech Stack <br />I used ?
              </h2>
              <p className="text-lg py-2">
                Technology and tools i used for development
              </p>
              <img
                src="/to-the-moon.png"
                alt="ilst"
                className="hidden md:block w-40 my-4 ml-auto"
              />
            </div>
            <div className="flex-1">
              <div className="w-3/4 mx-auto flex justify-between px-4 overflow-x-auto gap-2 border-2 border-black bg-black rounded-full py-2">
                {listTech.map((el) => (
                  <button
                    key={el.title}
                    className={clsx("cursor-pointer", {
                      "bg-white border border-white px-2 text-black font-medium rounded-full":
                        isTech === el.title,
                      "bg-black border border-white px-2 text-white font-medium rounded-full":
                        isTech !== el.title,
                    })}
                    onClick={() => setIsTech(el.title)}
                  >
                    {el.title}
                  </button>
                ))}
              </div>
              <div className="w-3/4 h-3/4 py-6 mx-auto">
                {listTech
                  .filter((el) => el.title === isTech)
                  .map((el) => (
                    <div
                      key={el.title}
                      className="grid grid-cols-4 place-items-center gap-4 "
                    >
                      {el.skills?.map((el, i) => (
                        <img
                          key={el.name}
                          data-aos={"zoom-in"}
                          data-aos-delay={Number(`${i}00`)}
                          data-aos-offset="100"
                          src={el.url}
                          alt={el.name}
                          title={el.name}
                          className="w-10 h-10 cursor-pointer"
                        />
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section
        id="project"
        className="relative max-w-4xl mx-auto px-4 md:px-0 py-20"
      >
        <div className="absolute -z-1 top-2/3 left-1/2 -translate-x-1/2 size-10 md:size-52 bg-primary rounded-2xl blur-[80px]"></div>
        <h2 className="text-4xl">Personal Project</h2>
        <p>The Project i was build before </p>
        <div className="flex overflow-x-auto py-4">
          {listProjects.map((el:Project) => (
            <CardProject key={el.id} project={el} />
          ))}
        </div>
      </section>
      <footer className="max-w-4xl py-20 mx-auto flex justify-center flex-col items-center">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
        <div className="w-full flex flex-col py-8 px-8 md:px-4 md:flex-row md:justify-between md:items-start">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Dzulfikar2403</h3>
            <div className="flex gap-2 text-sm">
              <MapPin size={18} />
              <p>JL. Telaga jambu blok b1/5, sawangan, depok</p>
            </div>
            <div className="flex gap-2 text-sm">
              <Mail size={18} />
              <p>dzulfikar2403@gmail.com</p>
            </div>
            <div className="flex gap-2 text-sm">
              <Phone size={18} />
              <p>(+62) 815-1192-1708</p>
            </div>
            <div className="flex gap-4 px-4 py-4 ">
              <a href="https://github.com/dzulfikar2403" target="_blank" className="border-2 rounded-full p-2 transition-all cursor-pointer hover:bg-black hover:text-white hover:border-black">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/dzulfikar-omar-yasir-368138319/" target="_blank" className="border-2 rounded-full p-2 transition-all cursor-pointer hover:bg-black hover:text-white hover:border-black">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/dzullfi.24/" target="_blank" className="border-2 rounded-full p-2 transition-all cursor-pointer hover:bg-black hover:text-white hover:border-black">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div className="flex gap-8 md:w-1/2 md:justify-around">
            <div className="space-y-4">
              <h4 className="font-medium">Categories</h4>
              <p className="text-sm">Technology</p>
              <p className="text-sm">Programming</p>
              <p className="text-sm">Portfolio</p>
              <p className="text-sm">Profile</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Explore</h4>
              <p className="text-sm">Home</p>
              <p className="text-sm">About</p>
              <p className="text-sm">Tech</p>
              <p className="text-sm">Project</p>
            </div>
          </div>
        </div>
        <small>2025 &copy; Dzulfikar Omar Y. All Rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
