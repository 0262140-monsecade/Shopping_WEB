import React from 'react'
import Carrito from './Carrito'
import Catalogo from './Catalogo'
import AgregarItem from './agregarItem'

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

        //lo que haces es encontrar el elemento donde se dio CLICK

        const productsCopy = [...products] //crear copia de products
        const product = productsCopy.find((p) => (p.id == id)) //enconbtar un producto especifico

        if(product.cantidad < 1){ //esto es para q en tu catalogo no te deje agregar mas elementos de los que hay a u carrito oswa si tienes 2 cantidades en catalogo entonces solo puedes agregar esas 
            return
        }



        if (productsCarr.length < 1) { //agrega elemento si el carrito está vacio
            const productsCarrCopy = [...productsCarr, { ...product, cantidad: 1 }] //haces copia de tu copia
            setProductsCarr(productsCarrCopy)

            //resta la cantidad al catalogo
            productsCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p))
            setProducts(productsCopy)
        }

        else { //agregar elemento cuando el carrito no está vacio
            const productCarr = productsCarr.find((p) => (p.id == id))
            const productsCarrCopy = [...productsCarr]

            //agregar elemento cuando el carrito no está vacio y ya se tiene un elemento similar (se aumenta cantidad)
            if (productCarr) {

                //resta cantidad al catalogo por eso se usa productsCopy
                productsCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p))
                setProducts(productsCopy)

                //suma cantidad de elemento en el carrito por eso se usa productsCarrCopy
                productsCarrCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad + 1 : p))
                setProductsCarr(productsCarrCopy)
            }

            else { //agregar elemento cuando el carrito no está vacio y NO se tiene un elemento similar (osea agregar productos DIFERENTES)

                //resta cantidad al catalogo por eso se usa productsCopy
                productsCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad - 1 : p))
                setProducts(productsCopy)

                const productsCarrCopy = [...productsCarr, { ...product, cantidad: 1 }] //haces copia de tu copia
                setProductsCarr(productsCarrCopy)

            }

        }

    }



    const eliminar = (id) => {

        const productsCarrCopy = [...productsCarr]
        setProductsCarr(productsCarrCopy.filter((p) => (p.id != id)))

        const product = productsCarr.find((p) => p.id == id) //te encunetra tu valor en el carrito para devolver esa cantidad a tu catalogo

        const productsCopy = [...products]
        productsCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad + product.cantidad : p)) //se usa product.cantidad para q le devuelvas el valor q tiene en tu carrito al catalogo
        setProducts(productsCopy)

        


    }

    return (
        <div>
            <AgregarItem></AgregarItem>
            <Catalogo products={products} onClick={agregar}></Catalogo>
            <Carrito products={productsCarr} onClick={eliminar}></Carrito>
        </div>
    )
}
