import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className=" bg-secondary pt-10 text-secondary-content">
        <div className="container mx-auto footer text-center flex flex-col xl:flex-row py-10">
          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-10 ">
          <div className='my-3'>
          <div className="flex flex-col justify-center items-center  w-full xl:flex-row xl:items-start  xl:justify-start">
          <Logo></Logo>
          <h2 className="font-bold text-2xl mb-2">
            Get Looking Great
          </h2> 
          </div>

          <p className='px-3 text-left'>
          With a passion for makeup and helping women feel good about themselves, you are guaranteed to Looking great and feel Confident in you way. 
          </p>
        </div> 
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start  w-full '>
    <span className="footer-title my-3">Quick Contact:</span> 
    <a className='flex items-center link link-hover gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
042 7847 32921
</a> 
    <a className='flex items-center link link-hover gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
ask@getLookingGreat.com
</a> 
 
        </div> 
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start  w-full'>
          <span className="footer-title my-3">Connect with Me:</span> 
          <div className="grid grid-flow-col gap-4">
            <a className='flex items-center link link-hover'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
            <a className='flex items-center link link-hover'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
            <a className='flex items-center link link-hover'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div> 
        <div className='flex flex-col justify-center items-center  w-full '>
          <span className="footer-title my-3">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
          </div>
        </div>
        
<div className="footer footer-center text-base-content mt-6 bg-base-300 py-4">
  <div>
    <p>Copyright © 2022 - All right reserved by Get Looking Great Ltd</p>
  </div>
</div>
      </footer>
    );
};

export default Footer;