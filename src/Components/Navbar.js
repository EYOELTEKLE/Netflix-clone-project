import React,{useState,useEffect} from 'react';
import '../Css/Navbar.css';
import logo from '../image/logo.png';
import avatar from '../image/Netflix-avatar.png';

function Navbar() {
    const [show,handleshow] = useState(false);
    const scrollCheck = () => 
    {
        window.scrollY > 100 ? handleshow(true):handleshow(false);
    }
    useEffect(() => 
    {
        window.addEventListener("scroll",scrollCheck);
        return () => window.removeEventListener("scroll",scrollCheck)
    },[]);
  return (
    <div className={`Nav ${show &&'Nav_black'}`}>
        <div className="nav_container">
        <img className='nav_logo' src={logo} alt="" />
        <img className='logo_avatar' src={avatar} alt="" />
        </div>
      
    </div>
  )
}

export default Navbar