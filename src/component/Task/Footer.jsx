import {Link} from "react-router-dom"
const Footer =()=>{
  return(
    <>
    {/*flex row */}
    <div class="flex justify-center bg-gray-200 h-20">
  <div class="bg-red-400 p-2">A</div>
  <div class="bg-blue-400 p-2">B</div>
     </div>

     {/* flex-col*/}

     <div class="flex flex-col justify-center bg-gray-200 h-40">
  <div class="bg-red-400 p-2">A</div>
  <div class="bg-blue-400 p-2">B</div>
</div>
      {/*flex row */}
     
     <div class="flex items-center bg-gray-200 h-20">
  <div class="bg-red-400 h-10">A</div>
  <div class="bg-blue-400 h-16">B</div>
</div>
  {/*flex col */}
<div class="flex flex-col items-center bg-gray-200 h-40">
  <div class="bg-red-400 p-2">A</div>
  <div class="bg-blue-400 p-2">B</div>
</div>




    

    {/*<div className="bg-amber-100 text-black p-5  flex justify-center items-center flex-col h-40 fixed bottom-0 left-0 w-full">
        <p>@2025 Maady design</p>
        <p>own developer</p>
    </div>*/}

    <div className="bg-amber-300 text-black flex flex-col items-center justify-center h-40  p-4 fixed bottom-0 left-0 w-full ">
        <p>This is second footer</p>
        <p>@2025 Developer</p>
    </div>
    <div>
    

    </div>
    </>
  )
}

export default Footer;