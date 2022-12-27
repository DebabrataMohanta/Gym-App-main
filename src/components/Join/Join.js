import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";


const Join=()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p822npu', 'template_whlli4s', form.current, 'Q5uoX6o6qV6FPp8Pl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(<>
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className="stroke-text">WITH US ?</span>
            </div>

        </div>
        <div className="right-j" id="now">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Enter Your Name "/>


                <input type="email" name="user_email" placeholder="Enter Your Email "/>
                <input type="text" name="user_number" placeholder="Enter Your Number "/>
                <button className="btn btn-join">Join Now</button>
            </form> 
        </div>
    </div>
    </>)
}
export default Join;