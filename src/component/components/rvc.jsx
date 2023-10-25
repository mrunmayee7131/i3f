import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CountUpWithVisibility = ({ start, end, duration }) => {
   const targetRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);
   const [countTriggered, setCountTriggered] = useState(false);

   useEffect(() => {
       const options = {
           root: null, 
           threshold: 0.5, 
       };

       const handleVisibilityChange = (entries) => {
           entries.forEach((entry) => {
               if (entry.isIntersecting) {
                   setIsVisible(true);
                  
                   setCountTriggered(false);
               } else {
                   setIsVisible(false);
               }
           });
       };

       const observer = new IntersectionObserver(handleVisibilityChange, options);

       if (targetRef.current) {
           observer.observe(targetRef.current);
       }

       return () => {
          
           observer.disconnect();
       };
   }, []);

   const handleCountEnd = () => {
     
       setCountTriggered(true);
   };

   return (
       <div>
           <div ref={targetRef}></div>
           {isVisible && !countTriggered && (
               <CountUp
                   start={start}
                   end={end}
                   duration={duration}
                   onComplete={handleCountEnd}
                  
               />
           )}
       </div>
   );
};

export default CountUpWithVisibility;
