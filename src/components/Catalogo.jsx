import React from 'react'

export default function Catalogo({ products, onClick }) {



  return (
    <div className='flex flex-wrap justify-center mx-2 my-2'>
      {products.map((product) => (
        <div key={product.id} className='border-4 rounded-2xl w-4/12 flex justify-center flex-wrap font-bold bg-white border-pink-200 text-pink-200 mx-2 my-2 gap-5'>
          <div>
            <h1 className='my-2'>{product.nombre}</h1>
            <p className='text-gray-400 font-light '> {product.descripcion} </p>
            <p className='text-gray-400 font-light'> Cantidad: {product.cantidad} </p>

            <button onClick = {() => onClick(product.id)} className=" flex flex-wrap my-4 px-6 py-2 bg-pink-200 text-white font-semibold rounded-2xl shadow-md hover:bg-pink-200 hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out">
              Agregar
            </button>

          </div>
          <img src={product.src} alt="imagen" className='w-40 h-40 felx justify-baseline' />
        </div>
      ))}
    </div>


  )
}

