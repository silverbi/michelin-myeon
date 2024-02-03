export const SideBar = () => {
  return (
    <div className="drawer-side h-[calc(100vh-72px)] mt-[72px] min-h-screen z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay !bg-transparent"
      ></label>
      <div className="p-4 w-80 bg-base-100 h-screen min-h-screen border-t border-r border-base-200">
        {/* Sidebar content here */}
      </div>
    </div>
  );
};

export default SideBar;
