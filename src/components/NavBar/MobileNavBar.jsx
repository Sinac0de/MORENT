import FavoritesIcon from "../Icons/FavoritesIcon";
import NotificationsIcon from "../Icons/NotificationsIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import SettingsIcon from "../Icons/SettingsIcon";

const MobileNavBar = ({ isNavCollapsed, setIsNavCollapsed }) => {
  return (
    <>
      <div
        className={`${
          isNavCollapsed
            ? "opacity-0 translate-x-full"
            : "opacity-100 translate-x-0"
        } w-full h-full fixed right-0 left-0 bottom-0 top-0 z-[998] bg-black/70 transition-opacity`}
        onClick={() => setIsNavCollapsed(true)}
      ></div>
      <div
        className={`${
          isNavCollapsed ? "translate-x-full" : "translate-x-0"
        } fixed right-0 bottom-0 bg-white border-l-2 shadow-2xl rounded-l-3xl h-full w-3/4 z-[999] transition-all flex flex-col text-secondary-400 overflow-y-auto`}
      >
        <div className="flex justify-center items-center h-[15%]">
          <h2 className="font-bold text-primary-500 text-2xl">Rentina</h2>
        </div>
        {/* Nav body */}
        <div className="px-3 flex-1 overflow-y-auto">
          <div className="flex flex-col w-full gap-3">
            <div className="p-4 border border-secondary-400 rounded-full cursor-pointer flex items-center gap-2">
              <FavoritesIcon />
              <h3>Favorites</h3>
            </div>
            <div className="p-4 border border-secondary-400 rounded-full cursor-pointer flex items-center gap-2">
              <NotificationsIcon />
              <h3>Notifications</h3>
            </div>
            <div className="p-4 border border-secondary-400 rounded-full cursor-pointer flex items-center gap-2">
              <SettingsIcon />
              <h3>Settings</h3>
            </div>
          </div>
        </div>

        {/* Nav Footer */}
        <div className="w-full px-5 py-3 flex flex-col gap-3 h-[23%]">
          <div className="cursor-pointer flex items-center gap-2">
            <ProfileIcon />
            <h3 className="text-base font-semibold">Hi, Sina!</h3>
          </div>
          <button className="w-full border border-primary-500 text-primary-500 focus:bg-primary-100/25 p-4 rounded-full mx-auto">
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
