import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleToLogout=()=>{
    logOut()
  }
  const nav=<>
  <li><Link>Home</Link></li>
  <li><Link>About</Link></li>
  <li><Link>Service</Link></li>
  <li><Link>Blog</Link></li>
  <li><Link>Contact</Link></li>
  </>
    return (
        <div className=" ">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <>
     
    <button className="btn" onClick={handleToLogout}>Log Out</button>
      </>
    :
    <>
     <NavLink to='/register'>
      <button className="btn">Registration</button>
    </NavLink>
    <NavLink to='/login'>
    <button className="btn">Login</button>
  </NavLink>
    </>
    
    }
    
   
  </div>
</div>
        </div>
    );
}

export default Header;
