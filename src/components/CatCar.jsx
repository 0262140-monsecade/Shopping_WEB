import React from 'react'
import Carrito from './Carrito'
import Catalogo from './Catalogo'
import AgregarItem from './agregarItem'

import { Routes, Route } from 'react-router'

export default function CatCar() {

    return (
        <div>

            <Routes>
                <Route path = '/agregar' element = {<AgregarItem/>}/>
                <Route path = '/carrito' element = {<Carrito/>}/>
                <Route path = '/home' element = {<Catalogo/>}/>
            </Routes>

        </div>
    )
}
