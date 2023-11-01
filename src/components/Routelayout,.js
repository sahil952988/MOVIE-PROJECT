import { Outlet } from "react-router"
import NavBar from "./NavBar"

const Routelayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
export default Routelayout