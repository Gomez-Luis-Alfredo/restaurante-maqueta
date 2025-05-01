import React from 'react'
import { CiStopwatch } from 'react-icons/ci'
import { FaFire, FaPlayCircle, FaUtensils } from 'react-icons/fa'
import IMG from '/assets/img-banner-hero.webp'
import { MdWatchLater } from 'react-icons/md'

export default function Hero() {
    return (
        <div className='container mt-[60px] '>
            <div>
                <div className='bg-[#a2efff] rounded-lg flex flex-col-reverse md:flex-row gap-3 overflow-hidden mt-4 mb-2'>
                    <div className='flex flex-col p-4'>
                        <span className='bg-white text-black p-1 md:p-2 flex rounded-full justify-center items-center gap-1 text-sm md:text-md'><FaFire />Receta Caliente</span>
                        <h1 className='text-2xl md:text-6xl font-bold md:pt-4 md:pb-4 pt-2 pb-2'>Alitas de Pollo Picantes</h1>
                        <p className='text-slate-600 text-sm md:text-md '>Crujientes, sabrosas y perfectamente condimentadas: Disfruta de la receta definitiva
                            de deliciosas alitas de pollo que le dejarán con ganas de más.</p>
                        <div className='flex justify-center gap-3 mt-5 mb-3'>
                            <span className='bg-[#4b8590] text-blck py-2 px-4 text-sm flex justify-center items-center rounded-full gap-1'>
                                <MdWatchLater className='size-[20px]'/> 30 min
                            </span>
                            <span className='bg-[#4b8590] text-black py-2 px-4 text-sm flex justify-center items-center rounded-full gap-1'>
                                <FaUtensils /> Pollo
                            </span>
                        </div>
                        <button className='text-white px-4 py-2 coursor-pointer bg-black flex justify-center  items-center rounded-xl gap-2'>Ver recetas...<FaPlayCircle className='size-[30px]'/></button>

                    </div>

                    <div>
                        <img src={IMG} alt="" className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </div>

    )
}
