import ThemeController from "@/components/elements/ThemeController";

export const Header = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-200">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          미슐랭면
        </a>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <ThemeController />
      </div>
    </div>
  );
};

export default Header;
