import { useState } from "react";

function SimpleInput() {
    console.log("component loadongg..");
    
  const [text, setText] = useState(""); // store input value
  

  return (
    <div className="flex flex-col items-center p-6">
      <input
        type="text"
        value={text} // input controlled by state
        onChange={(e) =>{ setText(e.target.value)
             console.log("usestaet loading");
         } } // update state
        placeholder="Type something..."
        className="border p-2 rounded mb-3 w-64"
      />

      <h2 className="text-xl">You typed: {text}</h2>
    </div>
  );
}

export default SimpleInput;
