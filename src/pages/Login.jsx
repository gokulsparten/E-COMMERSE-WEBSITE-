import "../styles/Login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = () => {

const storedUser = JSON.parse(localStorage.getItem("user"))

if(!storedUser){
alert("Please signup first")
return
}

if(email === storedUser.email && password === storedUser.password){
    localStorage.setItem("isLoggedIn","true" )

alert("Login successful")

navigate("/")

}else{

alert("Invalid email or password")

}

}

return(

<div className="auth-container">

<div className="login-box">

<h2>Login</h2>

<input
type="email"
placeholder="Enter your email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter your password"
onChange={(e)=>setPassword(e.target.value)}
/>

<p className="forgot">Forgot password?</p>

<button onClick={handleLogin}>Login</button>

<p>
Don't have an account?
<Link to="/signup"> Signup</Link>
</p>

</div>
</div>

)
}

export default Login