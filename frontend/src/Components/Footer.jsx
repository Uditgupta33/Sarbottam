import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="md:mx-10" >
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
         {/* left section */}
         <div>
           <img  onClick={() => (navigate('/'),scrollTo(0,0))} className="mb-5 w-40" src={assets.sarbottamLogo} alt="" />
           <p className="w-full md:w-2/3 text-gray-600 leading-6">
           "Welcome to Sarbottam Hospital, where your health and well-being are our top priority. At Sarbottam Hospital, we are committed to providing exceptional patient-centered care through state-of-the-art medical facilities and a compassionate, experienced healthcare team ."
           </p>
         </div>
 
         {/* center section */}
         <div>
           <p className="text-xl font-medium mb-5">Company</p>
           <ul className="flex flex-col gap-2 text-gray-600">
             <li className="cursor-pointer" onClick={() => (navigate('/'),scrollTo(0,0))}>Home</li>
             <li className="cursor-pointer" onClick={() => (navigate('/about'),scrollTo(0,0))}>About Us</li>
             <li className="cursor-pointer" onClick={() => (navigate('/my-contact'),scrollTo(0,0))}>Contact Us</li>
             <li className="cursor-pointer" onClick={() => (navigate('/'),scrollTo(0,0))}>Privacy policy</li>
           </ul>
         </div>

         {/* right-section */}
         <div>
           <p className="text-xl font-medium mb-5">Get In Touch</p>
           <ul className="flex flex-col gap-2 text-gray-600">
             <li>051-523780</li>
             <li>Sarbottamhospital9@gmail.com</li>
           </ul>
         </div>
      </div>

        {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ Sarbottam Hospital & Research Center - All Right Reserved. </p>
      </div>
    </div>
  ); 
};

export default Footer;
