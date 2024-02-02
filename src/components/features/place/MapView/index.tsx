import { useEffect } from "react";

export const MapView = () => {
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    new window.naver.maps.Map(mapDiv);
  }, []);

  return (
    <>
      <div
        id="map"
        className="w-[calc(100vw)] h-[calc(100vh-72px)] min-h-[calc(100vh-72px)]"
      />
    </>
  );
};

export default MapView;
