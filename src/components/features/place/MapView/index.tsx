import { useLayoutEffect, useRef } from "react";

export const MapView = () => {
  const mapElement = useRef(null);
  const { naver } = window;
  const mapOptions = {
    scaleControl: true,
    mapDataControl: true,
    mapTypeControl: false,
    zoomControl: false,
  };

  useLayoutEffect(() => {
    const location = new naver.maps.LatLng(37.5656, 126.9769);
    if (!mapElement.current || !naver) return;

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <>
      <div
        ref={mapElement}
        className="w-[calc(100vw)] h-[calc(100vh-72px)] min-h-[calc(100vh-72px)]"
      />
    </>
  );
};

export default MapView;
