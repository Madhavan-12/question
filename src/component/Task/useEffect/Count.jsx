import { useEffect, useState } from "react";

const Count=()=>{
    
     const [count,setCount]=useState(0)

     useEffect(()=>{
        document.title=`Count :${count}`; //side effect
     },[count])
     return(
        <>
       <h1 className="text-center mb-20">{count}</h1>
       <div className="flex justify-center">
           
             <button onClick={()=>setCount(count+1)} className="bg-green-400 text-black hover:bg-green-700 p-3 w-20 rounded">Increase</button>

       </div>
       
        </>
    )
}

export default Count ;