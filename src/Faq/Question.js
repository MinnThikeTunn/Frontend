import React from 'react';
import '../Styles/Faq.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import {useAnimate} from 'framer-motion';


function Question(props) {

    const [change,setChange] = useState(true);
    const [scope ,animate] = useAnimate();
  
  
    function onClick() {
      setChange(!change);
      (change) ? animate(".trivia", { height: "100%", width: "100%",left: "0%", top: "0%" }) :  animate(".trivia", { height: "0%", width: "0%",left: "50%", top: "50%" });
  
  
      // (change) ? animate(".answer", { height: 'auto', opacity: 1, transiton: "all 2s linear ease-in-out" }) :  animate(".answer",{
      //   height: 0, opacity: 0
      // } ) ;
    
     
    }
  
    
    return(
      
        <div   ref={scope} >
        
          <div className="whole" onClick={ onClick } >
      <div className="mt-7 question p-3.5" >
        <p className="text-xl lg:text-3xl" >{props.question}</p>
        <div className="circle p-2" >
          <div className="trivia"></div>
            {(change && props.answer ) ? <svg id="svg"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> : <svg id="svgg"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>}
         
          
          
          
        </div>
       
        
      </div>
  
      <AnimatePresence>
        { 
          !change && <motion.div initial={{ opacity: 0 , height: 0}}
          animate={{ opacity: 1 , height: "auto"}}
          exit={{ opacity: 0, height: 0 }} transition={{ type: "spring", stiffness: 100 }}>
          <pre className="para text-lg answer p-3.5" >
              {props.answer}
          </pre>
      </motion.div>
        }
          
      </AnimatePresence>
      
      
      </div>
        
      </div>
      
      
    );
  
    
  };
  

  export default Question;