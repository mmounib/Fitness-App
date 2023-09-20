
import { DashboardSection, ProfileSection } from "../../imports";

const HeaderSection = () => {
  return (
    <div className="w-full relative bg-gray-300 bg-opacity-30 backdrop-blur-lg mx-auto h-screen">
      <div className="w-[600px] h-[500px] absolute top-[10%] right-[10%] bg-amber-700 mx-auto rounded-full blur-[250px] opacity-30"></div>
      <div className="h-screen p-12">
        <ProfileSection />
        <DashboardSection />
      </div>
    </div>
  );
};

export default HeaderSection;
