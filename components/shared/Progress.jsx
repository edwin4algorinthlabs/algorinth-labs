import React from "react";
import { useState,useEffect } from "react";
import { Oval } from "react-loader-spinner";
const Progress = () => {
    const [loading, setLoading] = useState(true);
  
  
    return (
      <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-20 rounded-lg shadow-lg">
        <p className="text-gray-700 text-3xl mt-6">Loading...</p>
        <Oval color="#00BFFF" height={150} width={150} />
      </div>
    </div>
    
    );
  };
  
  export default Progress;