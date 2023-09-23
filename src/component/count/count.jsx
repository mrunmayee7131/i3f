import React,{useEffect,useState} from "react"
import "./count.css"
function Count(){
    const[count4,setCount4]=useState(0);
    const[count3,setCount3]=useState(0);
    const[count2,setCount2]=useState(0);
    const[count1,setCount1]=useState(0);
   
 
    // useEffect(() => {
        
    //     window.addEventListener('scroll');
        
        
    //     return () => {
    //         window.removeEventListener('scroll');
    //       }
    
    //   });

      
        
           
            useEffect(() => {
                if(window.scrollY>1400){
                setTimeout(() => {
                    
                  setCount1((count1) => count1<130?count1+1:count1);
                  setCount2((count2) => count2<53?count2+1:count2);
                  setCount3((count3) => count3<230?count3+1:count3);
                  setCount4((count4) => count4<19?count4+1:count4);
                
                }, 10);
              }else{
                setCount1(0);
                setCount2(0);
                setCount3(0);
                setCount4(0);
              }
            
            
            
            });
        
        
        // if (window.scrollY > 1350) {
        //     if(count2<53){
        //     setTimeout(() => {
        //      setCount2((count2) => count2 + 1);
        //    }, 10);
        //  }
        //  }
        //  if (window.scrollY > 1350) {
        //     if(count3<230){
        //     setTimeout(() => {
        //      setCount3((count3) => count3 + 1);
        //    }, 10);
        //  }
        //  }
        //  if (window.scrollY > 1350) {
           
        //     setTimeout(() => {
        //         if(count4<'19'){
        //      setCount4((count4) => count4 + 1);
        //     }}, 10);
         
        //  }
      
  





    return(
        <div className="countbody">
         <div className="outerdiv">

            <div className="innerdiv">
            <div className="box">
            <div className="content" >
                <div className="count"><h2>{count1}</h2></div>
            </div>
            </div>
            <p>Trained Start ups</p>
            </div>


            <div className="innerdiv">
            <div className="box">
            <div className="content" >
                <div className="count"><h2>{count2}</h2></div>
            </div>
            </div>
            <p>Incubated Start Ups</p>
            </div>


            <div className="innerdiv">
            <div className="box">
            <div className="content" >
                <div className="count"><h2>{count3}</h2></div>
            </div>
            </div>
            <p>Lakhs Fund Supported</p>
            </div>

            <div className="innerdiv">
            <div className="box">
            <div className="content" >
                <div className="count"><h2>{count4}</h2></div>
            </div>
            </div>
            <p>Patentable technologies</p>
            </div>
         </div>
        </div>
    )
}
export default Count;