import Image from 'next/image';
import { HiMenu ,HiOutlineSearch, HiBell, HiLocationMarker, HiOutlineSun, HiMoon, HiUserCircle } from "react-icons/hi";

export function Navbar(props: any) {
  return (
    <div className="navbar-container row">
        <div className="left-menu row">
            <div className="icon-container"><HiMenu className='row actual-icon'/></div>
            <div className="icon-container left-menu-link"><HiBell className='row actual-icon'/></div>
            <div className="row left-menu-link"><HiLocationMarker color="white" /> <p className="location">{props.region}</p></div>
        </div>
        <div className="form-container row">
            <form className="search-form">
                <input 
                    className="search-field"
                    placeholder="Search city"
                />
                <HiOutlineSearch id="search-icon" color="white"/>
            </form>
        </div>
        <div className="right-menu row">
            <div className="theme-selector row">
                <div className="light-mode icon-wrapper"><HiOutlineSun className='row actual-icon'/></div>
                <div className="dark-mode icon-wrapper"><HiMoon className='row actual-icon'/></div>
            </div>
            <div><HiUserCircle size="40px"/></div>
        </div>
    </div>
  )
}
