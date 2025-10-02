import React from 'react'
import { useState } from 'react'

export default function AgregarItem() {

    const [visible, setVisible] = useState(false)


    return (
        <div className='flex justify-center m-2 flex-wrap'>
            <div className="flex flex-wrap items-center justify-between  w-2/12 h-8 bg-yellow-50 rounded-2xl font-extrabold text-pink-300 px-5">
                <p>Agregar Item</p>
                <button onClick={() => setVisible(!visible)} className='cursor-pointer'>{visible ? "x" : "🌸"}</button>
                {visible && (
                <form action="">
                    <input
                        type="text"
                        placeholder='nombre'
                        id='nombre'
                    />
                </form>
            )}
            </div>

            
        </div>



    )
}
