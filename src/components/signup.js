// import "../styles/signup.css"

// const Signup=()=>{
//     return(
//     <div>
//     <div className="header">
//         <div className="brandLogo">
//             <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
//         </div>
//         <div>
//             <div className="signInBtn"  onclick="signIn()">Sign in</div>
//         </div>
//     </div>

//     <div className="container">
//     <div className="center">
//         <form id="signUpForm" class="signUpForm">
//             <div className="formDiv">
//               <input type="text" placeholder="Username"/>
//             </div>
//             <div className="formDiv">
//              <input type="text" placeholder="Email address" name="email"/>
//             </div>
//             <div className="formDiv">
//              <input  type="text" placeholder="Mobile number" name="phone"/>
//             </div>
//             <div className="formDiv">
//              <input  type="password" placeholder="Password" name="password"/>
//             </div>
//             <div className="formDiv">
//                 <button type="submit">Sign Up</button>
//             </div>
           
//         </form>
//     </div>
//   </div>
//     </div>
//     )
// }

// export default Signup;








import React, { useRef, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "../styles/signup.css";

const RegisterForm = ({ toggleForm }) => {
  const navigate = useNavigate();
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:""
  })
    const regForm = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/navbar");
  };
 

  return (
    <div className="header">
        
        
        <form onSubmit={handleSubmit} action="" ref={regForm} className="signUpForm">
        <div className="brandLogo">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
        </div>
            <div>
                <p><label for=""> Name</label></p>
                <input name="name" value={input.name} 
                    onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} className="formDiv" type="text" id="" placeholder='Name'/>
            </div>
            <div>
               <p><label for=""> Email</label> </p> 
                <input name="email" value={input.email} 
                    onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} className="formDiv" type="email" id="" placeholder='Email'/>
            </div>
            <div>
                <p><label for="">Password</label> </p>
                <input name="password" value={input.password} 
                    onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} className="formDiv" type="password" id="" placeholder='Password'/>
            </div>

            <div className="formDiv">
              <button type="submit">Register</button>
              </div>
            <p>Already a Member? <Link to="/navbar"><u>Sign In</u></Link></p>
        </form>
        
    </div>
  );
};

export default RegisterForm;