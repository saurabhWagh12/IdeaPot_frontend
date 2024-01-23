'use client'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

export default function Home() {
  const [domains,setDomains] = useState(null);
  useEffect(()=>{
    async function calling(){
      try {
        const response = await axios.get('http://192.168.18.118:8000/getdomains/');
        if(response.data.status===200){
          setDomains(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    calling();
  },[]);
  const link = `/chooseidea/`;
  return (
    <>
      <div className='min-h-screen bg-slate-500 text-black font-sans'>
        
        <Navbar/>
        {(domains&&domains.length!==0)?<h1 className='text-center pt-32 text-3xl text-white font-semibold'>Domain's</h1>:<></>}
          {domains && domains.length !== 0 ? (
            <div className='flex flex-wrap gap-10 justify-center items-center pt-12 mt-6 box-border px-6 pb-10'>
              {domains.map((domain) => (
                <a href={link+`${domain.domain}/`} className='bg-slate-700 text-white px-12 py-6 rounded-2xl shadow-md'>
                  <h2 className='text-3xl pb-6'>{domain.domain}</h2>
                  <p className='text-xl'>Total Count: {domain.totalCount}</p>
                  <p className='text-xl'>Available Count: {domain.availableCount}</p>
                </a>
              ))}
            </div>
          ) : (
            <p className='text-center pt-32 text-3xl text-white font-semibold'>Loading...</p>
          )}

          
          
      </div>
    </>
  )
}
