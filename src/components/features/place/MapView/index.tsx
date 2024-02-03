import { useLayoutEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import CustomMarker from "../CustomMarker";

export const MapView = () => {
  const mapElement = useRef(null);
  const { naver } = window;
  const customMarker = <CustomMarker />;
  const markerHTMLString = ReactDOMServer.renderToStaticMarkup(customMarker);

  const mapOptions = {
    scaleControl: true,
    mapDataControl: false,
    mapTypeControl: false,
    zoomControl: false,
  };

  useLayoutEffect(() => {
    const location = new naver.maps.LatLng(37.6696, 126.7509);
    if (!mapElement.current || !naver) return;

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    map.setCenter(location);
    new naver.maps.Marker({
      position: location,
      map,
      icon: {
        content: markerHTMLString,
        size: new naver.maps.Size(120, 40),
        anchor: new naver.maps.Point(60, 46),
      },
    });
  }, []);

  return <div ref={mapElement} className="w-[calc(100vw)] h-full min-h-full" />;
};

export default MapView;
