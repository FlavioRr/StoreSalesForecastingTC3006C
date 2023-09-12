import React from 'react'
import Navbar from '../components/Navbar'

const Index = () => {
  
  return (

    <div className='flex flex-col p-12 w-full h-full pt-[5.5rem]'>
      <h1 className="text-2xl font-bold mb-3">Búsqueda Platillos</h1>
      {/* Filtros */}
      <div className='flex w-full flex-wrap justify-between gap-3'>
        <div className='md:w-1/5 w-full'>
        </div>
        <div className='md:w-3/4 w-full'>
        </div>
      </div>

      {/* Catálogo Platillos */}
      <div className='mt-10 grid grid-cols-3 gap-10'>
        
      </div>

    </div>
  )
}

export default Index