import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom";
import Search from "../Pages/Search/Search";


const NavBar = () => {
  const nav = useNavigate();
  return (
    <div className="flex space-x-11 bg-black h-20">
      <div className="p-5">
        <NavLink className="text-white">Web Tail</NavLink>
      </div>
      <div className=" pl-[650px] pt-5 space-x-3">
        <button className="border-2 border-black">
          <NavLink className="text-white" to='/movie/popular'>Popular</NavLink>
        </button>
        <NavLink className="text-white" to='/movie/upcoming'>Upcoming</NavLink>
        <NavLink className="text-white" to='/movie/top_rated'>Now Playing</NavLink>

      </div>
      <div className="p-5">
        <Search />
      </div>




    </div>
  )
}
export default NavBar