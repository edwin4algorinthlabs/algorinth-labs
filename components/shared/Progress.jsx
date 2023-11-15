import React from "react";
import { useState,useEffect } from "react";
import { Oval } from "react-loader-spinner";
const Progress = () => {
    const [loading, setLoading] = useState(true);
  
  
    return (
      <div className="flex items-center justify-center h-screen">
       
          <div className="bg-white p-8 rounded-lg shadow-lg">
            
            <p className="text-gray-700 mt-4">Loading...</p>
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        
      </div>
    );
  };
  
  export default Progress;