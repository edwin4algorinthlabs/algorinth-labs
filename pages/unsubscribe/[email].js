import clientPromise from "@/db/mongo";
import axios from "axios";
import "../../app/globals.css"
import FooterContainer from "@/containers/Footer";
import DisplayPrices from "@/components/shared/price-display/DisplayPrices";
import Header from "@/components/shared/blog-header";
import { useEffect, useState } from "react";
export default function Mail({ mail }) {
 const [unsubscribed, setunsubscribed] = useState(false)
  const handleUnsubscribe = async () => {
      try{
          const response = await axios.post('/api/unsubscribe', {mail} );
          alert(response.data.message)
          setunsubscribed(true)
      }catch(error){
          alert(error)
      }
  };
  const handleClick = async ()=>{
    try{
        const response = await axios.post('/api/newsletter', {mail} );
        alert(response.data.message)
        setunsubscribed(false)
    }catch(error){
        alert(error)
    }
}
  return (
    <div>
    <Header />
     <div className="mt-[160px] my-8 mx-auto max-w-xl p-6  rounded-lg shadow-md text-center border border-green-500">
      <h1 className="text-5xl font-semibold mb-4">Hey there!</h1>
      <p className="text-lg mb-4">We're Sad to See you Go</p>
      <div className="text-3xl mb-4">{mail}</div>
      { unsubscribed?
      <button
        onClick={handleClick}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer text-lg"
      >
        subscribe
      </button> :  <button
        onClick={handleUnsubscribe}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer text-lg"
      >
        Unsubscribe
      </button>  }
    </div>
      

    <DisplayPrices />
    <FooterContainer />
  </div>
  );
}

export async function getStaticPaths() {
  try {
    const client = await clientPromise;
    const db = client.db("algorinthtest");

    // Fetch all emails from the "Newsletter" collection
    const emails = await db.collection("Newsletter").find({}).toArray();
    //console.log(emails)
    // Extract the email addresses
    const emailAddresses = emails.map((email) => email.mail);

    // Generate paths based on email addresses
    const paths = emailAddresses.map((email) => ({ params: { email } }));

    console.log("paths : ", paths)
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error("Error fetching emails:", error);
    return {
      paths: [],
      fallback: true,
    };
  }
}

  export async function getStaticProps({ params }) {
   //console.log(params)
    try {
  
      return {
        props: { mail: params.email },
      };
    } catch (error) {
      console.error("Error fetching entry:", error);
      return {
        notFound: true,
        fallback:false
      };
    }
  }