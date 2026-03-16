import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react"

function Navbar( { cartCount }) {
  const navigate = useNavigate();
   
const [isLoggedIn,setIsLoggedIn] = useState(false)

useEffect(()=>{

const loginStatus = localStorage.getItem("isLoggedIn")

if(loginStatus === "true"){
setIsLoggedIn(true)
}

},[])
  return (
    <nav className="navbar">
      <div className="logo">H&M</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
         <li>
    <NavLink to="/men" className={({isActive}) => isActive ? "active" : ""}>
      Men
    </NavLink>
   </li>

   <li>
    <NavLink to="/women" className={({isActive}) => isActive ? "active" : ""}>
      Women
    </NavLink>
   </li>

   <li>
    <NavLink to="/sale" className={({isActive}) => isActive ? "active" : ""}>
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