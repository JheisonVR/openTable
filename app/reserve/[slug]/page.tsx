import { NavBar } from '@/app/components'
import React from 'react'
import { FormReserve, HeaderReserve } from './components'


const ShakeshackReserve = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar/>
                <div className="border-t h-screen text-blue-950">
                    <div className="py-9 w-3/5 m-auto">
                        {/* HEADER */}
                        <HeaderReserve/>
                        {/* FORM */}
                        <FormReserve/>
                    </div>
                </div>
            </main>
        </main>
    )
}

export default ShakeshackReserve
