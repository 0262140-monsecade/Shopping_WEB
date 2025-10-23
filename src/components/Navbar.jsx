import React from 'react'
import { useNavigate } from 'react-router'

export default function Navbar() {
  const nav = useNavigate();
  return (
    <div className = 'flex items-center flex-wrap justify-center bg-yellow-50 h-12'>
        <a onClick = {() => nav('/home')}> <h1 className = ' text-pink-300 hover:text-pink-200 font-extrabold  mr-10'>Catálogo</h1> </a>
        <a onClick = {() => nav('/agregar')}> <h1 className = ' text-pink-300 hover:text-pink-200 font-extrabold'>Agregar producto</h1> </a>
        <a onClick = {() => nav('/carrito')}> <h1 className = ' text-pink-300 hover:text-pink-200 font-extrabold ml-10'>Carrito de compras</h1> </a>

      
    </div>
  )
}
