import React from 'react'
import CardCategoria from './CardCategoria'
import { categoria } from '../data/categoria'

export default function Categorias() {
   

    return (
        <div>
            <section className='container mt-4 mb-4'>
                <div className='flex justify-between items-center mt-2 mb-12'>
                    <h1 className='text-xl md:text-4xl font-bold'>Categorias</h1>
                    <button>Todas las categorias</button>
                </div>
                <div className=''>
                    <div className='grid  grid-cols-2 md:grid-cols-5 gap-2 md:gap-4'>
                        {
                            
                            categoria.map((cat) => (
                                <CardCategoria
                                    key={cat.categoria}
                                    categoria={cat.categoria}
                                    IMG={cat.IMG}
                                    background={cat.background}
                                />
                            ))
                            
                        }
                        
                    </div>

                </div>
            </section>
        </div>
    )
}
