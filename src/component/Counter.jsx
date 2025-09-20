import {useState} from 'react'

function Counter(){
    const[count,setCount]=useState(0);
    //declare a state variable count with initial value zero
    
    //Render ui
    return(
        <div>
            <h2>Counter value:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}
export default Counter;