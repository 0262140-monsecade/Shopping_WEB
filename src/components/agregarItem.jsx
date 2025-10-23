import React from 'react'
import { useState } from 'react';
import { useProductos } from '../contex/productos';


export default function AgregarItem() {
  const { products, setProducts } = useProductos()
  const [visible, setVisible] = useState(false)

  const [producto, setProducto] = useState({
    nombre: '',
    cantidad: 1,
    id: Date.now(),
    descripcion: '',
    src: null,
  })

  const guardarImagen = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProducto({ ...producto, src: URL.createObjectURL(file) })
    }
  }

  const agregarProducto = (e) => {
    e.preventDefault()
    const nuevo = { ...producto, cantidad: Number(producto.cantidad), id: Date.now() }
    setProducts([...products, nuevo])
    setProducto({ nombre: '', cantidad: 1, id: Date.now(), descripcion: '', src: null })
  }

  return (
    <div className='flex justify-center'>
      <div className='relative flex flex-col shadow-md shadow-gray-30 bg-yellow-50 font-extrabold text-pink-300 px-5 rounded w-6/12 top-1'>
        <div className='items-center mb-2'>
          <p>Agregar Item</p>
        </div>
        <div className='absolute right-4'>
          <button
            onClick={() => setVisible(!visible)}
            className='cursor-pointer hover:scale-125 transition-transform'
          >
            {visible ? 'x' : '🌸'}
          </button>
        </div>

        {visible && (
          <div className='flex flex-wrap justify-center'>
            <form onSubmit={agregarProducto}>
              <label htmlFor='nombre' className='block mb-1'>
                Nombre:
              </label>
              <input
                type='text'
                placeholder='Nombre'
                id='nombre'
                required
                className='border border-white my-2 px-4 py-1 w-120 block rounded bg-white'
                value={producto.nombre}
                onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
              />

              <label htmlFor='cantidad' className='block mb-1'>
                Cantidad:
              </label>
              <input
                type='number'
                min={1}
                placeholder='Cantidad'
                id='cantidad'
                required
                className='border border-white my-2 px-4 py-1 w-120 block rounded bg-white'
                value={producto.cantidad}
                onChange={(e) => setProducto({ ...producto, cantidad: e.target.value })}
              />

              <label htmlFor='descripcion' className='block mb-1'>
                Descripción:
              </label>
              <input
                type='text'
                placeholder='Descripción'
                id='descripcion'
                required
                className='border border-white my-2 px-4 py-1 w-120 block rounded bg-white'
                value={producto.descripcion}
                onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
              />

              <label htmlFor='imagen' className='block mb-1'>
                Imagen:
              </label>
              <input
                type='file'
                accept='image/*'
                placeholder='Imagen'
                id='image'
                required
                className='border border-white my-2 px-4 py-1 w-120 block rounded bg-white'
                onChange={guardarImagen}
              />

              <button className='flex flex-wrap my-4 px-6 py-2 bg-pink-200 text-white rounded-2xl shadow-md hover:bg-pink-200 hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out font-extrabold'>
                Agregar Equipo
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}