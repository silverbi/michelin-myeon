import MarkerEndpointIcon from "@/assets/marker-endpoint-icon.svg?react";
import { IMAGES } from "@/common/images";

export const CustomMarker = () => {
  return (
    <div className="w-auto h-10 relative">
      <label
        htmlFor="my-drawer"
        className="drawer-button bg-[#734b46] p-1.5 rounded-full flex flex-row justify-center items-center cursor-pointer"
      >
        <img
          src={IMAGES.NAENGMYEON}
          alt="냉면 마커 이미지"
          className="rounded-full w-8 h-8 object-cover mr-1"
        />
        <p className="text-sm font-bold text-primary-content mr-2">
          을밀대 본점
        </p>
        <MarkerEndpointIcon
          fill="#734b46"
          className="absolute -bottom-3 left-auto right-auto fill-primary"
          width={18}
          height={18}
        />
      </label>
    </div>
  );
};

export default CustomMarker;
