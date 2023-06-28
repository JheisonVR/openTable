
import { NavBar } from '@/app/components'
import React from 'react'
import { HeaderRestaurant, RestaurantCard } from './components'

const RestaurantDetails = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar/>                

                <HeaderRestaurant/>
                <RestaurantCard/>
                
            </main>
        </main>
    )
}

export default RestaurantDetails