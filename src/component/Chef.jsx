import IMG from '../assets/img/img-chef.png'

export default function Chef() {
  return (
    <div className='container mt-4 mb-4'>
        <div className='flex flex-cols-1 flex-col-reverse md:flex-row  justify-center items-center'>
        <div className='grid grid-cols-1 justify-center items-center mt-4 m-b-4'>
            <h1 className='text-2xl  md:text-4xl font-bold'>Cada uno puede ser chef de su propia cocina</h1>
            <p className='text-sm md:text-md text-slate-600 mt-2 mb-2'>Descubra recetas fáciles y deliciosas para dar rienda suelta 
                al artista culinario que llevas dentro y hacer de cada comida una obra maestra.
            </p>
            <button className='text-white px-4 py-2 coursor-pointer bg-black flex justify-center  items-center rounded-xl gap-2 hover:bg-slate-950 md:w-[200px]'>Aprender más...</button>
        </div>
        <div className=''>
            <img src={IMG} alt="" />

        </div>

        </div>
        
    </div>
  )
}
