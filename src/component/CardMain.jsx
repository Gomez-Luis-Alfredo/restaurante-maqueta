import { useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import { FaHeart, FaUtensils } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";


export default function CardMain({nombre,categoria,tiempo, IMG,id}) {
    const [favorito, setFavorito] = useState(false)
    const handerFavorito = () =>{
        setFavorito(!favorito)
    }
  return (
    <div key={id} className="relative grid grid-cols-1 content-between bg-teal-50  rounded-lg  overflow-hidden  flex-grow-1 h-full w-full shadow-md shadow-slate-400">
        <div className="grid col-span-1">
            <img src={IMG} alt="Platrillos a prepara" className="rounde-md object-cover w-full h-[250px] hover:scale-105 duration-300"/>
            <span className="p-1 bg-white absolute top-0 right-0 rounded-full m-2" onClick={handerFavorito}><FaHeart className={`${favorito ? 'text-red-500' : 'text-slate-400'} 'size-[15px]'`}/></span>
        </div>
        <div className="px-2 py-4">
            <h1 className="font-semibold text-sm">{nombre}</h1>
            <div className="flex justify-start items-center  gap-1 mt-2">
                <span className="bg-blue-200 px-2 py-1 text-[10px] text-slate-800 rounded-full flex justify-center items-center gap-1"><MdWatchLater className='size-[15px] text-slate-800 font-bold'/>{tiempo}</span>
                <span className="bg-blue-200 px-2 py-1 text-[10px] text-slate-800 rounded-full flex justify-center items-center gap-1"><FaUtensils />{categoria}</span>

            </div>
        </div>
    </div>
  )
}
