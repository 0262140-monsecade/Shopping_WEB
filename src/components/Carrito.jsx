import React from 'react'

export default function Carrito({products, onClick}) {

  return (
    <div className='flex flex-wrap justify-center fixed bottom-0 bg-pink-200 w-dvw h-12'>
      {products.map((product) => (

        <div key={product.id} className=' flex justify-center border border-pink-200 w-2/12 h-8 bg-yellow-50 rounded-2xl font-extrabold text-pink-200'>
          <p className = "mx-2">{product.nombre} </p>
          <p className='text-gray-500'>cant: {product.cantidad}</p>
          <button onClick = {() => onClick(product.id)} className=" my-1 mx-3 w-6 h-6 flex items-center justify-center bg-pink-400 text-white text-lg font-bold rounded-full shadow-md hover:bg-pink-600 hover:scale-110 active:scale-90 transition-transform duration-200 ease-in-out">
            ×
          </button>

        </div>
      ))}
    </div>
  )
}
