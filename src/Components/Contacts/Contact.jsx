import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '' || email.trim() === '') {
      setSuccessMessage('');
      setErrorMessage('Please fill out both name and email.');
    } else {
      console.log('Message sent');
      setErrorMessage('');
      setSuccessMessage('Message sent successfully!');

      // Clear all fields after 2 seconds
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('');
      }, 2000);
    }
  };

  return (
    <div id="contact" className='contact min-h-screen bg-black space-y-5 pt-[100px]'>
      <div>
        <div className='rounded-md flex justify-center w-[80%] mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_#a855f7]'>
          <h1 className='text-4xl font-bold text-white'>Get In <span className='text-purple-500'>Touch</span></h1>
        </div>
        <div className='w-[80%] flex justify-center mx-auto pt-6'>
          <p className='text-white text-xl'>Let’s create something amazing! I’m open to freelance work, collaborations, or any exciting ideas you want to share.</p>
        </div>
      </div>

      <div className='flex max-h-screen flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-7 w-[90%] mx-auto'>
        {/* Left: Contact Info */}
        <div className="box1 rounded-xl border w-[90%] space-y-4 md:w-[40%] transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_25px_#a855f7]">
          <h1 className='text-white text-3xl font-bold text-center pt-7'>Contact Information</h1>
          <div className='p-4 md:pl-16 space-y-4 pt-6'>
            <div className='flex items-center space-x-4'>
              <i className="fa-solid fa-envelope text-white text-xl"></i>
              <div className='text-white break-words whitespace-normal'>
                <h4 className='font-bold'>Email</h4>
                <h2>mohammadaman8952@gmail.com</h2>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <i className="fa-solid fa-location-dot text-white text-xl"></i>
              <div className='text-white'>
                <h4 className='font-bold'>Location</h4>
                <p>Hyderabad, India</p>
              </div>
            </div>
            <div>
              <h2 className='text-white text-2xl'>Connect With Me</h2>
            </div>
            <div className='text-white flex gap-8'>
              <i className="fa-brands fa-linkedin text-3xl cursor-pointer"></i>
              <i className="fa-brands fa-github text-3xl cursor-pointer"></i>
              <i className="fa-brands fa-square-instagram text-3xl cursor-pointer"></i>
              <i className="fa-brands fa-twitter text-3xl cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className='box2 border text-white w-[90%] h-auto md:w-[40%] p-8 space-y-2 rounded-xl transform transition duration-300 shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#a855f7]'>
          <h1 className='text-3xl font-bold text-center'>Send Message</h1>

          <div className='flex flex-col'>
            <label className='text-xl pb-3'>Your Name:</label>
            <input
            
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='rounded-sm bg-black border border-white transform transition duration-300 shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#a855f7] px-4'
              placeholder='Enter Your Name'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-xl pb-3'>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-sm bg-black border border-white transform transition duration-300 shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#a855f7] px-4'
              placeholder='Enter Your Email'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-xl pb-3'>Message:</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Your Message"
              className='h-[94px] transform transition duration-300 shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#ffffff] rounded-sm bg-black border border-white px-4'
            />
          </div>

          {/* Messages */}
          {errorMessage && (
            <p className="text-red-500 text-center font-semibold mt-4">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center font-semibold mt-4">{successMessage}</p>
          )}

          <div className='flex justify-center p-5'>
            <button
              onClick={handleSubmit}
              className='p-3 rounded-md border transform transition duration-300 shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#ffffff] border-white'
            >
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
