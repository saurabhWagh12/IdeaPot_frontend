'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
    setModalOpen(true);
    };

  const closeModal = () => {
    setModalOpen(false);
  };

  const Modal = () => {
    return (
      <div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className='flex items-center justify-between gap-10 mb-10'>
                    <h2 className="text-4xl text-black font-semibold ">Items</h2>
                    <button
                        onClick={closeModal}
                        className=" bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700"
                    >
                        X
                    </button>
              </div>

              <div className="text-2xl">
                <div>
                    <a href="/" className="text-black hover:text-gray-300">Home</a>
                </div>
                <div>
                    <a href="/about" className="text-black hover:text-gray-300">About</a>
                </div>
                <div>
                    <a href="/events" className="text-black hover:text-gray-300">Events</a>
                </div>
                
            </div>
              
            </div>
          </div>
        )}
      </div>
    );
  };


  return (
    <nav className='flex justify-center'>
        <div className='w-[80%] flex justify-between bg-slate-800 text-white shadow-lg  fixed mt-6 rounded-2xl px-6 py-4 '>
            <img className='w-16' src='http://rcoemtbi.org/static/media/tbi-logo.0dfc88c63bf809a4ec5f.png'/>

            <div className='hidden lg:flex lg:font-sans text-lg font-medium justify-around items-center gap-4'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/events'>Events</a>
            </div>

            {!isModalOpen && (
            <div className="lg:hidden">
                <button className="text-white text-4xl" onClick={openModal}>&#9776;</button>
            </div>
            )}
            {isModalOpen && <Modal />}
        </div>
    </nav>
  )
}

export default Navbar