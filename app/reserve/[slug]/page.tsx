import { NavBar } from '@/app/components'
import React from 'react'
import { FormReserve, HeaderReserve } from './components'


const ShakeshackReserve = () => {
    return (
            <div className="border-t h-screen text-blue-950">
                <div className="py-9 w-3/5 m-auto">
                    {/* HEADER */}
                    <HeaderReserve/>
                    {/* FORM */}
                    <FormReserve/>
                </div>
            </div>
    )
}

export default ShakeshackReserve
