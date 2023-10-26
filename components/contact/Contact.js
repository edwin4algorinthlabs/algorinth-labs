"use client"

import "./Contact.css";
import axios from "axios";
import { useState } from 'react';




const Contact = () => {
  const [data, setData] = useState(
    { firstName: "", lastName: "", companyMail: "", inquiry: "Smart Contract Audit", message: "", projectlink: "" }
  )
  const [error, setError] = useState(false);
//email transporter

const getMarketCap = async ()=> {
  try{
    const response =await axios.get('/api/coinmarketcap')
    console.log(response.data)
  }catch(error){
    setError(true)
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
    sendData();
    sendNotification();
    //getMarketCap();
  }
  return (
    <div className="w-full max-w-5xl mx-auto">
    <p className="font-bold text-center mb-10 md:mb-20 md:mt-10 text-[40px] text-white">Contact Us</p>
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-3 w-full max-w-[1185px] mx-auto pb-[100px] px-5">
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
          <input type="url" name="projectlink" id="link" onChange={handleChange} value={data.name} required /> <br />

          {/* <input type="submit" name="submit" value="submit" /> */}

          <button type="submit" className="submit__button">Submit</button>


          {/* <p>
        {data.fName} {data.lName} {data.cName} {data.inquiry} {data.message} {data.link} {data.inquiry} 
    </p> */}




          <p className="block md:hidden mt-6 text-xs text-center">
            For secure communications, please use  <a href="https://www.sendsafely.com/u/admin@algorinthlabs.com" className="text-primary">SendSafely.</a>
          </p>
        </form>


        <div className='info w-full max-w-[407px]'>
          <h4 className="text-center md:text-left">
            Contact us to help you secure your smart contract.
          </h4>

          <p className="hidden md:block">
            For secure communications, please use  <a href="https://www.sendsafely.com/u/admin@algorinthlabs.com">SendSafely.</a>
          </p>

        </div>
    </div>
    </div>



  );
};
export default Contact;