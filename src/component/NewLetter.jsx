import React from 'react'

export default function NewLetter() {
  return (
     <div className='container mt-8 mb-8 bg-indigo-100 rounded-lg'>
                <div className='grid grid-cols-1 content-center mt-4 mb-4 '>
                    <div className='flex justify-center items-center p-4'>
                    <h1 className='text-2xl  md:text-4xl font-bold'>Delicias en tu correo</h1>
                    </div>
                    <div className='flex justify-center p-2'>
                    <p className='text-sm md:text-md text-slate-600 mt-1 mb-2'>Delicias culinarias sencillas para mejorar tu cocina diaria.
                        descubra comidas rápidas y deliciosas que impresionarán a sus invitados 
                        y harán de cada comida una ocación especial.
                    </p>
                    </div>   
                </div>
                <div className='flex sm:flex-cols-1 justify-center items-center gap-2 pb-6 '>
                    <input type="text" placeholder='tu correo electrónico' className='text-md text-slate-500 rounded-lg p-2 w-[500px]  outline-none'/>
                    <button className='text-white px-4 py-2 coursor-pointer bg-black flex justify-center  items-center rounded-xl'>Suscribete</button>
                </div>
            </div>
  )
}
