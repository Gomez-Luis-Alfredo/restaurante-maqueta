import {main} from '../data/main'
import CardMain from './CardMain'

export default function Main() {
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
                  main.map((ma)=>(
                    <CardMain
                    key={ma.id}
                    id={ma.id}
                    nombre={ma.Nombre}
                    categoria={ma.categoría}
                    tiempo={ma.Tiempo}
                    IMG={ma.IMG}
                    />
                  ))
                }
            </div>
        </div>
    </div>
  )
}
