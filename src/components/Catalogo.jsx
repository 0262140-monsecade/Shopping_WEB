import React from 'react'

export default function Catalogo() {

  const products = [
    { nombre: "Camera", cantidad: 4, id: 1354 },
    { nombre: "Microfono", cantidad: 4, id: 1355 },
    { nombre: "Audifonos", cantidad: 4, id: 1356 },
    { nombre: "Television", cantidad: 4, id: 1357 },
  ]

  return (
    <div className='flex flex-wrap justify-center'>
      {products.map((product) => (
        <div key = {product.id} className='border rounded-2xl w-4/12 flex justify-center font-bold bg-pink-200 border-pink-200 text-white m-2'>
          <p>{product.nombre}</p>
        </div>
      ))}
    </div>


  )
}

