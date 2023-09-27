"use client"

import Image from 'next/image';
import "./Contact.css";
import { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState(
    { fName: "", lName: "", cName: "", inquiry: "", message: "", link: "" }
  )

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
    // alert(data);
  }
  return (
    <div className="pt-[130px] orange-gradient w-full">
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-3 w-full max-w-[1185px] mx-auto pb-[100px] px-5">
        {/* This is the form section */}
        <form action='#' method='post' onSubmit={handleSubmit}>
          <div className='names'>

            <div>
              <label for="fname">First name</label>
              <input type="text" name="fName" id="fname" placeholder="John" onChange={handleChange} value={data.name} required /> <br />

            </div>

            <div>
              <label for="lname">Last name</label>
              <input type="text" name="lName" placeholder="Doe" id="lname" onChange={handleChange} value={data.name} required /> <br />
            </div>
          </div>


          <label for="cName">Company name</label>
          <input type="text" name="cName" cols={15} rows={1} id="cName" onChange={handleChange} value={data.name} required /> <br />

          <label for="inquiry">Inquiry type</label>
          <select name="inquiry" id="inquiry" value={data.inquiry} required>
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

          <button type="submit" className="submit__button">Submit</button>
        </form>


        <div className='info w-full md:w-[35%]'>
          <h4 >
            Contact us to help you secure your smart contract.
          </h4>

          <p>
            For secure communications, please use  <a href="https://www.sendsafely.com/u/admin@algorinthlabs.com">SendSafely</a>.
          </p>

        </div>
    </div>
    </div>



  );
};
export default Contact;