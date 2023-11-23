/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import NavBar from '../pages/Shared/NavBar/NavBar'
import NavbarTest from '../components/Test/NavbarTest'

const Main = () => {
  const location = useLocation()

  const noHeaderFooter =
    location.pathname.includes('login') || location.pathname.includes('signup')

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      {/* <NavbarTest className=''></NavbarTest> */}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main
