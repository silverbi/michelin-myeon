import { IMAGES } from "@/common/images";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleGoToPlace = () => {
    navigate("/place");
  };

  return (
    <>
      <div className="hero min-h-[calc(100vh-72px)] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={IMAGES.NAENGMYEON}
            className="max-w-sm rounded-lg shadow-2xl mr-8"
            alt="평양냉면"
          />
          <div>
            <h1 className="text-5xl font-bold">
              혹시... 평양냉면 좋아하시나요?
            </h1>
            <p className="py-6">
              미슐랭면은 숨어있는 평양냉명 맛집들의 위치를 소개하는 지도
              서비스입니다.
              <br />
              식당마다 고유한 평양냉면의 맛을 한눈에 비교할 수 있어요.
              <br />
              미슐랭면을 통해 <b>나만의 평양냉면 맛집</b>을 찾아 보세요!
            </p>
            <button onClick={handleGoToPlace} className="btn btn-primary">
              평양냉면 찾아보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
