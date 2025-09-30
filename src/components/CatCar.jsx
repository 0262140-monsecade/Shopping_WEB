import React from 'react'
import Carrito from './Carrito'
import Catalogo from './Catalogo'
import camera4 from '../assets/camera4.jpg'
import microfono3 from '../assets/microfono3.jpg'
import audifonos3 from '../assets/audifonos3.jpg'
import television3 from '../assets/television3.jpg'
import { useState } from 'react'

export default function CatCar() {



    const [products, setProducts] = useState([
        { nombre: "Camera", cantidad: 14, id: 1354, descripcion: "Camara instantanea rosa super de chava", src: camera4 },
        { nombre: "Microfono", cantidad: 2, id: 1355, descripcion: "Microfono de chava rosa para ser spreen", src: microfono3 },
        { nombre: "Audifonos", cantidad: 9, id: 1356, descripcion: "Audifonos super de chava linda coqueta", src: audifonos3 },
        { nombre: "Television", cantidad: 1, id: 1357, descripcion: "Television ULTRA HD rosa de chava", src: television3 },
    ])

    const [productsCarr, setProductsCarr] = useState([])

    const agregar = (id) => {
        const productsCopy = [...products] //crear copia de products
        const product = productsCopy.find((p) => (p.id == id)) //enconbtar un producto especifico
        const productsCarCopy = [...productsCarr, product] //haces copia de tu copia

        setProductsCarr(productsCarCopy) 

    }

    const eliminar =(id) => {
        
    }

    return (
        <div>
            <Catalogo products={products} onClick = {agregar}></Catalogo>
            <Carrito products={productsCarr}></Carrito>
        </div>
    )
}
