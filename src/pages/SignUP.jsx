import "../styles/SignUp.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function SignUp(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSignup = () => {

const user = {email,password}

localStorage.setItem("user", JSON.stringify(user))

alert("Signup successful")

navigate("/login")

}

return(

<div className="auth-container">

<div className="signup-box">

<h2>Signup</h2>

<input
type="email"
placeholder="Enter your email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Create a password"
onChange={(e)=>setPassword(e.target.value)}
/>

<input type="password" placeholder="Confirm your password"/>

<button onClick={handleSignup}>Signup</button>

<p>
Already have an account?
<Link to="/login"> Login</Link>
</p>

</div>
</div>

)
}

export default SignUp