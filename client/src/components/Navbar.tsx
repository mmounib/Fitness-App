import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { SiCountingworkspro } from "react-icons/si";
import { GiProgression, GiAchievement } from "react-icons/gi";
import {AiOutlineLogout} from 'react-icons/ai'

const Navbar = () => {
  return (
    <section className=" flex  bg-amber-600 bg-opacity-70 h-screen w-[320px]">
      <nav className="flex flex-col w-full m-12">
        <div className="flex gap-4">
          <h1 className="text-white font-semibold text-2xl">Fitness Tracker</h1>
        </div>
        <span className=" mt-12 border-[1px] opacity-40 w-full border-white"></span>
        <div className=" mt-24">
          <ul className="text-white flex flex-col items-start justify-between h-full gap-14 font-semibold text-xl">
            <li>
              <Link to="/" className="flex items-center gap-8">
                <BiHome size={30} /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-8">
                <SiCountingworkspro size={30} /> Workout
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-8">
                <GiProgression size={30} /> Progress
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-8">
                <GiAchievement size={30} />
                Goals
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-white gap-8 mt-auto">
            <AiOutlineLogout size={30}/>
            <Link to="/logout" className="font-semibold text-xl text-white">Log out</Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
