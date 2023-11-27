import React, { useState } from "react";

const Post = ({ head, Body, Closing }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleOkClick = () => {
    setShowAlert(false);
  };
 console.log(showAlert)
  return (
    <>
      {showAlert && (
     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
     <div className="mt-20 my-8 mx-auto max-w-7xl p-8 rounded-lg shadow-md text-center bg-black text-white">
       <h1 className="text-6xl font-semibold mb-6">{head}</h1>
       <p className="text-xl mb-6">{Body}</p>
       <div className="text-4xl mb-6">{Closing}</div>
       <button
         onClick={handleOkClick}
         className="bg-green-500 text-white py-3 px-6 rounded-full cursor-pointer text-xl"
       >
         Ok
       </button>
     </div>
   </div>
   
      )}

      {/* Rest of your component content */}
    </>
  );
};

export default Post;
