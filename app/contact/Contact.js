import React from "react";
import Image from 'next/image';
import "./Contact.css";
import axios from "axios";
import { useState } from 'react';




const Contact = () => {
  const [data, setData] = useState(
    { firstName: "", lastName: "", companyMail: "", inquiry: "Smart Contract Audit", message: "", link: "" }
  )
  const [error, setError] = useState(false);
//email transporter

const getMarketCap = async ()=> {
  try{
    const response =await axios.get('/api/coinmarketcap')
    console.log(response.data)
  }catch(error){
    console.log(error)
  }
}

  const sendData = async ()=>{
    try {
      const response = await axios.post('/api/sendContact', { data });
      
      if (response.data.message == "Data registered successfully"){
        alert("Thanks we'll be in touch Soon");
      }else{
        setError(true)
        alert("please type correct information")
      }
      // alert(JSON.stringify(response.data.emails, null, 2));
    } catch (error) {
      setError(true)
      alert("Something Went Wrong Please check if data follows rule");

    }
  }
  const sendNotification = async()=>{
    try{
       
      const res = await axios.post("/api/sendNotification",{data});
      console.log(res.data.message)
    }catch(error){
      console.log(error)
    }
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    ///sendData();
    if(!error){
      getMarketCap();
    }
   //alert(JSON.stringify(data, null, 2));
  }
  return (
    <div className="items-start bg-[url(/images/div-services-overview.jfif)] bg-cover h-[714px] border-none bg-[50%_50%] justify-center">
      <main>




        {/* This is the form section */}
        <form action='#' method='post' onSubmit={handleSubmit}>
          <div className='names'>

            <div>
              <label for="fname">First name</label>
              <input type="text" name="firstName" id="fname" placeholder="John" onChange={handleChange} value={data.name} required /> <br />

            </div>

            <div>
              <label for="lname">Last name</label>
              <input type="text" name="lastName" placeholder="Doe" id="lname" onChange={handleChange} value={data.name} required /> <br />

            </div>




          </div>


          <label for="cName">Company Email</label>
          <input type="text" name="companyMail" cols={15} rows={1} id="cName" onChange={handleChange} value={data.name} required /> <br />

          <label for="inquiry">Inquiry type</label>
          <select name="inquiry" id="inquiry" value={data.inquiry} onChange={handleChange} required>
            <option value="Smart Contract Audit">Smart Contract Audit</option>
            <option value="Smart Contract Security">Smart Contract Security</option>
            <option value="Smart Contract Testing">Smart Contract Testing</option>
            <option value="Web3 Development">Web3 Development</option>
            <option value="Web3 Consultation">Web3 Consultation</option>
          </select> <br></br>




          <label for="message">What can Algorinth labs do for you?</label>
          <textarea name="message" cols={15} rows={10} id="message" onChange={handleChange} value={data.name} required></textarea> <br />

          <label for="link">Link to project on Github</label>
          <input type="url" name="link" id="link" onChange={handleChange} value={data.name} required /> <br />

          {/* <input type="submit" name="submit" value="submit" /> */}

          <button type="submit" onClick={sendNotification}>Submit</button>


          {/* <p>
        {data.fName} {data.lName} {data.cName} {data.inquiry} {data.message} {data.link} {data.inquiry} 
    </p> */}




        </form>


        <div className='info'>
          {/* This section is for information */}

          <h4>
            Contact us to help you secure your smart contract.
          </h4>

          <p>
            For secure communications, please use  <a href="https://www.sendsafely.com/u/admin@algorinthlabs.com">SendSafely</a>.
          </p>

        </div>
      </main>


    </div>



  );
};
export default Contact;
