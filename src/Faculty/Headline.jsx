import '../Styles/Degree.css';
import { AnimatedText } from '../Components/AnimatedText';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";


const header = [
  "Faculty of Computer Science",
  "(FCS)"
]


const headerMobile = [
  "Faculty of computer",
  "science(FCS)",
]



    
function Headline() {


  

  // const title = "Admissions infromation and requirements";
  // const MyanText = "Admissions infromation and requirements";

  // const display = (language == "EN") ? title : MyanText;

  return (
    <>
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
    <div className="hide hero py-14 px-6 lg:px-[97px]">
    {header.map((header) => 
       <span className="overflow-hidden fade">
          <AnimatedText
          once
          text={header}
          el="h1"
          className="lg:text-7xl text-4xl font-normal leading-9 lg:leading-[80px]"
          language="EN"
          
        />
      </span>
        
  
)}
</div>
<div className="sm:hidden hero py-14 px-6 lg:px-[97px]">
{headerMobile.map((header) => 
       <span className="overflow-hidden fade">
        <AnimatedText
       once
       text={header}
       el="h1"
       className="lg:text-7xl text-4xl font-normal leading-9 lg:leading-[80px]"
       language="EN"
       
     />
       </span>
       
 
)}

  </div>
    </motion.div>
     
  
    </>
  );

 
}

export default Headline;



