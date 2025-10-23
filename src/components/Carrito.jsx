import React from 'react'
import { useProductos } from '../contex/productos'

export default function Carrito() {
  const { productsCarr, eliminar } = useProductos()

  return (
    <div className='flex flex-wrap justify-center fixed bottom-0 bg-pink-200 w-dvw h-12'>
      {productsCarr.length === 0 ? (
        <p className='text-white font-semibold mt-2'>Carrito vacío</p>
      ) : (
        productsCarr.map((product) => (
          <div
            key={product.id}
            className='flex justify-center items-center border border-pink-200 w-2/12 h-8 bg-yellow-50 rounded-2xl font-extrabold text-pink-200 mx-1 px-2'
          >
            <p className='mx-2'>{product.nombre}</p>
            <p className='text-gray-500'>x{product.cantidad}</p>
            <button
              onClick={() => eliminar(product.id)}
              className='ml-2 w-6 h-6 flex items-center justify-center bg-pink-400 text-white text-lg font-bold rounded-full shadow-md hover:bg-pink-600 hover:scale-110 active:scale-90 transition-transform duration-200 ease-in-out'
            >
              ×
            </button>
          </div>
        ))
      )}
    </div>
  )
}
