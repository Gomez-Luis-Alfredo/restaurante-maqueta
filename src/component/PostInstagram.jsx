import IMG1 from '/assets/post-instagram-1.png'
import IMG2 from '/assets/post-instagram-2.png'
import IMG3 from '/assets/post-instagram-3.png'
import IMG4 from '/assets/post-instagram-4.png'

export default function PostInstagram() {
  return (
    <div>
        <div className='container mt-8 mb-4'>
            
              <div className='grid grid-cols-1 content-center mt-4 mb-4'>
                <div className='flex justify-center items-center'>
                <h2 className='text-2xl md:text-4xl font-bold '>Echa un vistazo a <span className='font-Lobster text-4xl font-bold'>Sibarita</span> en <span className='text-red-400'>Instagram</span></h2>
                </div>
                <div className='flex justify-center mb-4'>
                <p className='text-sm text-slate-600'>!Inspirate con fotografías deliciosas, recetas deliciosas y consejos de cocina para mejorar tus hábilidades culinarias!</p>
                </div>
                
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='w-full rounded-md shadow-lg shadow-slate-400 overflow-hidden cursor-pointer'>
                    <img src={IMG1} alt="" />
                </div>
                <div className='w-full rounded-md shadow-lg shadow-slate-400 overflow-hidden cursor-pointer'>
                    <img src={IMG2} alt="" />
                </div>
                <div className='w-full rounded-md shadow-lg shadow-slate-400 overflow-hidden cursor-pointer'>
                    <img src={IMG3} alt="" />
                </div>
                <div className='w-full rounded-md shadow-lg shadow-slate-400 overflow-hidden cursor-pointer'>
                    <img src={IMG4} alt="" />
                </div>
                
              </div>
            
        </div>
    </div>
  )
}
