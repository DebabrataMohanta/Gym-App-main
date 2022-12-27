import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";


const Footer=()=>{
    
    return(<>
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">
<a href="https://github.com/DebabrataMohanta" target="black">
<img src={Github} alt=" "/>
</a>
<a href="https://www.instagram.com/_deb_mohanta/" target="black"> <img src={Instagram} alt=" "/></a>
<a href="https://www.linkedin.com/in/debabrata-mohanta-9053711b3/" target="black">  <img src={Linkedin} alt=" "/></a>
           
          
 </div>
           
            
             <div className="logo-f">
                <img src={Logo} alt=" "/>
             </div>
             
    </div>
    <div className="blur footer-blur-1"></div>
    <div className="blur footer-blur-2"></div>
    </div>
    </>)
}
export default Footer;
