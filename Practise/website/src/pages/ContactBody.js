import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactBody() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
    
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5 flex flex-col items-center">
      <div className="text-center mt-10 mb-16">
        <h1 className="text-[clamp(2rem,6vw,6rem)] font-bold">
          Contact Me<span className="text-purple-500">.</span>
        </h1>
        <p className="text-gray-500 text-[clamp(1rem,2vw,1.5rem)] mt-3">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-10">

        
        <form className="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>

          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input 
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject" 
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message" 
            rows="6"
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button 
            type="submit"
            className="bg-purple-500 text-white font-bold py-4 rounded-xl hover:bg-purple-600 transition"
          >
            Send Message
          </button>
        </form>

       
        <div className="flex-1 flex flex-col justify-center gap-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-purple-500">Get in touch</h2>
          <p className="text-gray-500">
            You can also reach me via social media or just send me a message here.
          </p>

          <div className="flex gap-4 justify-center md:justify-start text-2xl text-gray-700">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
