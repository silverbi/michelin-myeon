export const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              혹시... 평양냉면 좋아하시나요?
            </h1>
            <p className="py-6">
              미슐랭면은 숨어있는 평양냉명 맛집들의 위치를 소개하는 지도
              서비스입니다. 식당마다 고유한 평양냉면의 맛을 한눈에 비교할 수
              있어요. 미슐랭면을 통해 나만의 평양냉면 맛집을 찾아 보세요!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
