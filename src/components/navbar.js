// import "../styles/navbar.css";

// const Navbar=()=>{
//     return(
//         <div className="icon">

//         <header>
//             <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
//         </header>

//     <div className="container">
//         <form className="signInForm" id="signInForm">
//             <h1>Sign In</h1>
//             <div className="formDiv">
//                 <input type="text" placeholder="Email Address" name="email"/>
//             </div>
//             <div className="formDiv">
//                 <input type="password" placeholder="Password" name="password"/>
//             </div>
//             <div className="formDiv">
//                 <button className="submitBtn" type="submit">Sign In</button>
//             </div>
//             <p>New to Netflix? <button type="submit" onclick="signUp()" class="signUpBtn" >Sign up now</button></p>
//         </form>
//     </div>

//         </div>
//     )
// }
// export default Navbar;










import { useRef , useState} from "react";
import React from 'react';
import "../styles/navbar.css";
import { useNavigate,Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
    const logForm = useRef();
    const [input,setInput] = useState({
      email:"",
      password:""
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
      localStorage.setItem("loggedin",true);
       navigate("/");
    }else{
      alert("Wrong Email or Password")
    }
  };
  

  return (
    <div className="icon">
         

    <div className="container">
      <form onSubmit={handleSubmit} action="" ref={logForm} className="signInForm">
      <header>
             <img className="netflixlogo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
         </header>
            <div className="formDiv">
                <p className="text">Email:</p>
                <input name="email" value={input.email} 
                    onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} id="" placeholder="Name"/>
            </div>
            <div className="formDiv">
                <p className="text">Password:</p>
                <input name="password" value={input.password} 
                    onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} id="" placeholder="Password"/>
            </div>
            <button className="submitBtn" type="submit">Sign In</button>       
           </form>
           
        <p className="signUpBtn">Not a member? <Link to="/signup" className="signUpBtn"><u>Sign up Now</u></Link></p>
    </div>
    </div>
  );
};

export default LoginForm;
