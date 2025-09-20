import React from "react";
function TechList(){
    const skills=["React","Node","sql"];
    return(
        <ul>
            {skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}
        </ul>
    );  
}
export default TechList;