import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CountUpWithVisibility = ({ start, end, duration }) => {
   const targetRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);
   const [countTriggered, setCountTriggered] = useState(false);

   useEffect(() => {
       const options = {
           root: null, // Use the viewport as the root
           threshold: 0.5, // Trigger when 50% of the target is visible
       };

       const handleVisibilityChange = (entries) => {
           entries.forEach((entry) => {
               if (entry.isIntersecting) {
                   setIsVisible(true);
                   // Reset the countTriggered state when the div becomes visible
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
           // Clean up the observer when the component unmounts
           observer.disconnect();
       };
   }, []);

   const handleCountEnd = () => {
       // Set countTriggered to true when the CountUp animation ends
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
