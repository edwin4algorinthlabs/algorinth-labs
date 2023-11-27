import React from "react";
import { useState,useEffect } from "react";
import { Oval } from "react-loader-spinner";
const Progress = ({message}) => {
    const [loading, setLoading] = useState(true);
  
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center h-screen">
      <div className="bg-white p-20 rounded-lg shadow-lg">
        <p className="text-gray-700 text-3xl mt-6">{message}</p>
        <Oval color="#00BFFF" height={150} width={250} />
      </div>
    </div>
    
    );
  };
  
  export default Progress;