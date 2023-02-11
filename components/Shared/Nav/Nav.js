import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className='bg-[#3272BA] h-20  flex justify-center items-center'>
                <h1 className='text-2xl font-bold  text-white '>Demo online test</h1>
            </div>
      <div className='flex gap-3'>
       
      <div className="navbar bg-base-100 w-[80%]">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 gap-2 shadow bg-base-100 rounded-box w-52">
        <li className='bg-[#000095] text-white'><a>All sections</a></li>
      
        <li className='bg-[#3272BA] text-white'><a>Physics </a></li>
        <li className='bg-[#3272BA] text-white'><a>Chemistry </a></li>
        <li className='bg-[#3272BA] text-white'><a>Math </a></li>
      </ul>
    </div>
    <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal gap-2">
      <li className='bg-[#000095] text-white'><a>All sections</a></li>
     
       <li className='bg-[#3272BA] text-white '><a>Physics </a></li>
        <li className='bg-[#3272BA] text-white '><a>Chemistry </a></li>
        <li className='bg-[#3272BA] text-white '><a>Math </a></li>
    </ul>
  </div>
  </div>
 
  
</div>

<div className='flex gap-2 bg-[#CEECEE] border-gray-400 border-2 shadow-md rounded-sm w-[20%]'>
 <div>
   <img className='w-36' src="https://www.pngitem.com/pimgs/m/264-2640465_passport-size-photo-sample-hd-png-download.png" alt="" />
 </div>
 <div>
  <p>Time Left</p>
  <p>02:39:29</p>
  <p>Ashis Kumar</p>
 </div>
</div>
      </div>
      <hr className='mr-80 ml-3 relative bottom-8' />
        </div>
    );
};

export default Nav;