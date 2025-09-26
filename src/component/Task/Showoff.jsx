import { useState } from "react";

const Showoff = () => {
  const [showImage, setShowImage] = useState(false); // state to track image

  const toggleImage = () => {
    setShowImage(!showImage); // toggle true/false
  };

  return (
    <>
      <div className="text-center mt-4">
        <button
          onClick={toggleImage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {showImage ? "Hide Image" : "Show Image"}
        </button>

        {/* Conditionally render image */}
        {showImage && (
          <div className="mt-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Example"
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Showoff;
