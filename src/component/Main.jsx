import { useState } from 'react'
import { FaHeart, FaUtensils } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import {main} from '../data/main.jsx'



export default function Main() {
  
  const CardMain2 = (item) =>{
  const [favorito, setFavorito] = useState(false)
  const handerFavorito = () =>{
      setFavorito(!favorito)
  }
    return (
      <div key={item.id} className="relative grid grid-cols-1 content-between bg-teal-50  rounded-lg  overflow-hidden  flex-grow-1 h-full w-full shadow-md shadow-slate-400">
              <div className="grid col-span-1">
                  <img src={item.IMG} alt="Platrillos a prepara" className="rounde-md object-cover w-full h-[250px] hover:scale-105 duration-300"/>
                  <span className="p-1 bg-white absolute top-0 right-0 rounded-full m-2" onClick={handerFavorito}><FaHeart className={`${favorito ? 'text-red-500' : 'text-slate-400'} 'size-[15px]'`}/></span>
              </div>
              <div className="px-2 py-4">
                  <h1 className="font-semibold text-sm">{item.Nombre}</h1>
                  <div className="flex justify-start items-center  gap-1 mt-2">
                      <span className="bg-blue-200 px-2 py-1 text-[10px] text-slate-800 rounded-full flex justify-center items-center gap-1"><MdWatchLater className='size-[15px] text-slate-800 font-bold'/>{item.Tiempo}</span>
                      <span className="bg-blue-200 px-2 py-1 text-[10px] text-slate-800 rounded-full flex justify-center items-center gap-1"><FaUtensils />{item.categoría}</span>
      
                  </div>
              </div>
          </div>
    )
  }
  return (
    <div className='container mt-8 mb-4'>
        <div className='grid grid-cols-1 justify-center items-center mt-4 m-b-4'>
            <div className='flex justify-center'>
            <h1 className='text-2xl  md:text-4xl font-bold'>Recetas sencillas y sabrosas</h1>
            </div>
            <div>
            <p className='flex justify-center text-sm md:text-md text-slate-600 mt-2 mb-4'>Delicias culinarias sencillas para mejorar tu cocina diaria.
                descubra comidas rápidas y deliciosas que impresionarán a sus invitados 
                y harán de cada comida una ocación especial.
            </p>
            </div>   
        </div>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center'>
                {
                  main.map(CardMain2)
                }
            </div>
        </div>
    </div>
  )
}
