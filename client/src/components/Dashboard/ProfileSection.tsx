import { AiFillSetting } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

function ProfileSection() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 relative">
        <button
          type="button"
          className="absolute flex justify-center items-center  h-full pl-2 text-amber-600"
        >
          <BiSearch size={25} />
        </button>

        <input
          type="text"
          placeholder="Search..."
          className="w-[400px]  text-black pl-10 h-[45px] border-amber-600 border-2 rounded-xl"
        />
      </div>
      <div className=" w-[10%]">
        <div className="flex bg-white shadow-customShadow flex-row-reverse items-center justify-between gap-6 py-1 px-4 border-2 border-favorite rounded-xl">
          <CgProfile size={35} className=" cursor-pointer" />
          <AiFillSetting size={25} className=" fill-favorite cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
