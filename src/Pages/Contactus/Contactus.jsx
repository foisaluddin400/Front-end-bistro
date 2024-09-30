import { useState } from "react";
import SectionHead from "../Shared/SectionHeading/SectionHead";
import Location from "./Location";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before submitting

    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address."); // Set error message for invalid email
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error); // Set error message from the server
      } else {
        // Handle success case (e.g., show a success message or reset form)
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <div className='contact'>
        <div className='text bg-black p-20 md:px-52 bg-opacity-60 space-y-5'>
          <h1 className='text-4xl font-bold'>Contact Us</h1>
          <p className='uppercase'>would you like to dry dish</p>
        </div>
      </div>
      <section className='my-10'>
        <SectionHead sectionPar={'visit us'} sectionhead={'our location'} />
      </section>

      <div className='bg-indigo-100 h-[400px] flex items-center justify-center'>
        <Location />
      </div>

      <section className='my-10'>
        <SectionHead sectionPar={'send us a message'} sectionhead={'contact form'} />
      </section>

      <form onSubmit={handleSubmit} className='bg-[#F3F3F3] py-20 px-10 space-y-5'>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div>
            <label htmlFor="name">Name*</label> <br />
            <input
              value={formData.name}
              onChange={handleChange}
              className='bg-white w-full p-2 rounded-md outline-none border'
              type="text"
              name="name"
              placeholder='Enter your name'
            />
          </div>

          <div>
            <label htmlFor="email">Email*</label> <br />
            <input
              value={formData.email}
              onChange={handleChange}
              className='bg-white w-full p-2 rounded-md outline-none border'
              type="email"
              name="email"
              placeholder='Enter your email'
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone">Phone*</label>
          <input
            value={formData.phone}
            onChange={handleChange}
            className='bg-white w-full p-2 rounded-md outline-none border'
            type="text"
            name="phone"
            placeholder='Enter Your Phone number'
          />
        </div>

        <div>
          <label htmlFor="message">Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="outline-none p-2 rounded-md w-[100%] h-[100px] bg-white"
            placeholder='Write your message'
          ></textarea>
          <div className="flex justify-center mt-8">
            <button type="submit" className="bg-orange-700 text-white btn">Send a message</button>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
