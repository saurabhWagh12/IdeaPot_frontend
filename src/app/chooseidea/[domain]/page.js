'use client'
import Navbar from '@/app/components/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Modal = ({ isOpen, onClose ,title , id , selectIdea,setEmail,setName}) => {
    return (
      <div
        className={`fixed inset-0 z-50 ${
          isOpen ? 'block' : 'hidden'
        } overflow-auto bg-gray-800 bg-opacity-60 flex items-center justify-center`}
      >
        <div className="bg-slate-600 w-96 text-white p-6 rounded-3xl shadow-lg ">
          <h2 className="text-lg font-bold mb-4">ID: {id}</h2>
          <p className='text-lg font-medium'>{title}</p>
          <div className='py-4 flex flex-wrap justify-center items-center text-black'>
           <input type='text' placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} className='mb-4 border border-black p-2 rounded-xl text-center'/>
            <input type='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} className='border border-black p-2 rounded-xl text-center'/>
            </div>

            <div className='flex justify-center items-center gap-12'>

            <button
            className="mt-4 bg-slate-700 text-white py-2 px-4 rounded-xl hover:bg-slate-800"
            onClick={()=>{selectIdea()}}
          >
            Submit
          </button>
          <button
            className="mt-4 bg-slate-700 text-white py-2 px-4 rounded-xl hover:bg-slate-800"
            onClick={onClose}
          >
            Close
          </button>
          </div>
        </div>

      </div>
    );
  };

function page({params}){
    const [name,setName] = useState("");
    const [email,setEmail] = useState(""); 

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    let {domain} = params
    const [idea,setIdea] = useState(null);
    domain = domain.replace(/%20/g, " ")
    useEffect(()=>{
        async function calling(){
            try {
                const response = await axios.post('http://192.168.18.118:8000/choose/',{domain:domain});
                if(response.data.status===200){
                    setIdea(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        calling();
    },[]);
    
    async function selectIdea(){
        try {
            const response = await axios.post(`http://192.168.18.118:8000/finalise/${idea.id}/`,{name:name,email:email});
            if(response.data.status===200){
                alert("Congratulation's! your Idea is finalised");
                // Navigate to another URL
                window.location.href = '/';

            }
            
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='bg-slate-500 text-black min-h-screen w-screen'>
        <Navbar/>
        <div className=' flex justify-center'>
            <div className='mt-24'>
              <h1 className='text-center text-white mb-6 mt-12 font-semibold text-3xl'>{domain}</h1>

                {idea?<div className='pt-12 bg-slate-700 text-white px-10 py-6 rounded-2xl font-semibold mx-6 shadow-md'>
                    <h1 className='text-2xl pb-6'>ID: {idea.id}</h1>
                    <h1 className='text-2xl pb-6'>Title: {idea.title}</h1>
                    <div className='flex justify-center gap-10'>
                        <button onClick={openModal} className='text-xl bg-green-600 rounded-2xl px-6 py-4'>Accept Idea</button>
                        <a href={`/chooseidea/${domain}/`} className='text-xl bg-red-600 rounded-2xl px-6 py-4'>Try Again</a>
                    </div>
                </div>:<p className='text-center pt-32 text-3xl text-white font-semibold'>Loading...</p>}

                {idea!==null?<Modal isOpen={isModalOpen} onClose={closeModal} title={idea.title} id={idea.id} selectIdea={selectIdea} setName={setName} setEmail={setEmail}/>:<></>}

            </div>
        </div>
    </div>
  )
}

export default page