import React from 'react'
import {NavBar} from '../../../components'
import { HeaderMenu, MenuCard } from './components'


const Menu = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar/>
                <HeaderMenu/>
                {/* DESCRIPTION PORTION */}
                <MenuCard/>
            </main>
        </main>
    )
}
export default Menu