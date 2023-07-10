import "../styles/homepage.css";
import video from "../media/video.mp4";
import Banner from "./banner";
import Netflixoriginal from "./netflixoriginal";
import Fetchlatest from "./fetchlatest";
import Dumnetorig from "./dumnetorig";
import Dumtoprat from "./dumtoprat";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";





const Homepage=()=>{
  const [drop,setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(e => !e)
  }

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/navbar");
  }
    return(
      <>
<div>
        <div  id="overlay"></div>   
       
        <div className="wholeHeader">
          <header id="header" className="black-bg">
             <div className="header-cont">
                     <div className="leftCon">
                          <img className="header-brand" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/> 
                          <ul className="main-nav">
                             <li className="nav-item active">Home</li>
                             <li className="nav-item">TV Shows</li>
                             <li className="nav-item" id="movieBtn">Movies</li>
                             <li className="nav-item">News & Popular</li>
                             <li className="nav-item">My List</li>
                             <li className="nav-item">Browse by Languages</li>
                          </ul>
                     </div>
                     <div className="rightCon">
                         <ion-icon name="search-outline"></ion-icon>
                         <ion-icon name="notifications-outline"></ion-icon>
                       <div type="button" id="dropBtn" className={drop ? "toggle" : "no-toggle"} onClick={handleDrop} >
                       <img id="details" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"   alt=""/>
                                    <ul className="profile" id="profile">
                                      <div>Manage Profiles</div>
                                      <div>Edit Profile</div>
                                      <div>Transfer Profile</div>
                                      <div>Account</div>
                                      <div>Help Center</div>
                                      <div onClick={handleLogout} id="logOut">Sign Out of Netflix</div>
                                    </ul>
                       </div>
                     </div>
             </div>
         </header>
         

{/* 
            <select className="profile" >
                <option>Manage Profiles</option>
                <option>Edit Profile</option>
                <option>Transfer Profile</option>
                <option>Account</option>
                <option>Help Center</option>
                <option>Sign Out of Netflix</option>
            </select> */}
          
        </div>

        
          
          <div className="banner-section" id="banner-section" >
            <div>
              <video className="videotag" src={video} controls></video>
            </div>
               <div className="banner_fadeBottom"></div>
          </div>
      
       
        <div className="heads">
          <h2>Top Rated</h2>
        </div>
          <div className="movies-cont" id="movies-cont">
          <Banner/>
          
          <div className="heads">
          <h2>Netflix Original</h2>
        </div>

          <Netflixoriginal/>
          
          <div className="heads">
          <h2>Latest Movies</h2>
        </div>

          <Fetchlatest/>

          <div className="heads">
          <h2>All Categories</h2>
        </div>
          <Dumnetorig/>
          </div>

        <div className="heads">
          <h2>Popular on Netflix</h2>
          <Dumtoprat/>

        </div>

          
      
        <div> clas</div>
        </div>

        <h1>Welcome --- {userName.name}</h1>
        

      </>


    )
}
export default Homepage;