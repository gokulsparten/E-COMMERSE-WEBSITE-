import { useNavigate } from "react-router-dom";

function UserMenu(){

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out");
    navigate("/");
  }

  return(

    <div>

      {!isLoggedIn ? (

        <>
          <button onClick={()=>navigate("/login")}>Login</button>
          <button onClick={()=>navigate("/register")}>Register</button>
        </>

      ) : (
        <button onClick={logout}>Logout</button>
        
      )}

    </div>

  )

}

export default UserMenu;