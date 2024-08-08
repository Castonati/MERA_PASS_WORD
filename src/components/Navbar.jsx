
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-blue-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-White-500'> &lt;</span>
                   
                    <span>MERA</span><span className='text-red-500'>PASS/&gt;</span>
                  
                    
                    </div>
                {}
                <button className='text-white bg--700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'> 
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'><a href="https://github.com/Castonati">GitHub</a></span>
                    
                </button>
            </div>
        </nav>
    )
}

export default Navbar
