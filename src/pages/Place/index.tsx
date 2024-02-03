import MapView from "@/components/features/place/MapView";
import SideBar from "@/components/features/SideBar";

export const Place = () => {
  return (
    <div className="drawer h-[calc(100vh-72px)]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <SideBar />
      <MapView />
    </div>
  );
};

export default Place;
