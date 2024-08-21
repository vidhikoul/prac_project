import React from 'react'
import Ban from "../../public/Ban.jpg"
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl contaner mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-32 md:mt-12'>
        <div className='space-y-10'>
        <h1 className='text-4xl font-bold'>Welcome to our <span className='text-pink-500'>ngo website</span></h1>
          <p className='text-xl '>At [Your NGO Name], our mission is to create a positive impact in [specific cause or issue your NGO addresses]. 
            Guided by our core values of [values], we are dedicated to making a difference in the lives of those we serve.</p>
            <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

        </div>
        <button className="btn btn-secondary mt-6">Submit</button>
        

        </div>
        <div className='order-1 w-full md:w-1/2'>
        <img src={Ban} className='w-80 h-80 mx-40 mt-20'></img>
        </div>
      
    </div>
    </>
  );
}

export default Banner;
