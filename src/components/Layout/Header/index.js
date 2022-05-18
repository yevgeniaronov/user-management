import {
  Routes,
  Route,
  Link as RouterLink,
  useRouteMatch,
  useLocation,
  BrowserRouter as Router,
} from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '@images/logo_icon_inverse.svg'
import medigateLogo from '@images/medigate-logo.svg'
const NavLink = (props) => {
  const isActive = useLocation().pathname === props.to
  return (
    <li>
      <RouterLink
        {...props}
        className={`p-10 flex justify-between font-semibold items-center border-b-8 border-transparent ${
          isActive ? 'border-yellow-400' : ''
        }`}
      />
    </li>
  )
}

const Header = () => {
  return (
    <nav
      className={`${styles.header} bg-blue-700  flex pl-10 pr-10 justify-between text-white`}
    >
      <img width="150" src={logo} alt="logo" />
      <ul className="justify-center flex ">
        <NavLink to="/">Users</NavLink>

        <NavLink to="/alerts">Alerts</NavLink>
      </ul>

      <div className="header__user-profile flex items-center">
        <div className="bg-white p-1 rounded-3xl flex mr-2">
          <img width="35" src={medigateLogo} alt="avatar" />
        </div>
        <div>
          <p className="header__user-profile--name font-bold">Medigate User</p>
          <p className="header__user-profile--greeting ">Hi!</p>
          <p className="header__user-profile--logout-btn underline text-yellow-400">
            <RouterLink to="/logout">Logout</RouterLink>
          </p>
        </div>
      </div>
    </nav>
  )
}
export default Header
