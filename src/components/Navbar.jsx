import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react"

function Navbar( { cartCount }) {
  const navigate = useNavigate();
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(()=>{

const loginStatus = localStorage.getItem("isLoggedIn")

if(loginStatus === "true"){
setIsLoggedIn(true)
}

},[])
  return (
    <nav className="navbar">
      <div className="logo">H&M</div>
      
      <div 
        className="menu-toggle" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
         <li>
    <NavLink to="/men" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
      Men
    </NavLink>
   </li>

   <li>
    <NavLink to="/women" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
      Women
    </NavLink>
   </li>

   <li>
    <NavLink to="/sale" className={({isActive}) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
      Sale
    </NavLink>
   </li>
  </ul>
         <div className="nav-icons">
           {isLoggedIn ? (

  <div className="user-menu">
<span>👤 Gokul</span>

<button
onClick={()=>{
localStorage.removeItem("isLoggedIn")
window.location.reload()
}}
> 
Logout
</button>

</div>

) : (
       <Link to="/login" className="user-icon">
       <FaUser size={20}/>
       </Link>
)}
      <Link to="/cart" className="cart">
        🛒 
        <span className="cart-count">{cartCount}</span>
      </Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
