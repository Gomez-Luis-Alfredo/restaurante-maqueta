import React from 'react'

export default function CardCategoria({categoria,IMG}) {
  return (
    <div  className='relative flex flex-col sm:mt-4 justify-center items-center bg-cyan-100  rounded-lg shadow-md shadow-slate-500 mb-6 md:mb-0'>
        <div className='absolute top-0 '> 
        <img src={IMG} alt="" className='hover:translate-y-[-50px] md:hover:translate-y-[-50px] duration-500  transaform md:w-full -translate-y-1/2 w-[80px] lg:w-[130px] mt-4'/>
        </div>
        <div className='md:mt-20 mt-14'>
         <p>{categoria}</p>
        </div>
        
        
    
    </div>
  )
}
