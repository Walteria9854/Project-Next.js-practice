import NavList from "./NavList/NavList";

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800">
        <div>
            <h1>Next Tasks</h1>
            <NavList />
        </div>
    </div>
  )
}

export default SideMenu;
