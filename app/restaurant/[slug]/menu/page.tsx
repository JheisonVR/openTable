import React from 'react'
import {NavBar} from '../../../components'
import { MenuCard } from './components'
import { PrismaClient } from '@prisma/client'
import { RestaurantNavbar } from '../components';


const prisma = new PrismaClient();

const fetchRestaurantMenu = async ( slug:string ) => {
    const restaurantMenu = await prisma.restaurant.findUnique({
        where:{
            slug
        },
        select:{
            items:true
        }
    })

    if(!restaurantMenu) throw new Error
    return restaurantMenu
}


const Menu = async ( {params}:{params: {slug:string}} ) => {

    const menu = await fetchRestaurantMenu(params.slug) 

    return (
        <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* DESCRIPTION PORTION */}
            <RestaurantNavbar
                slug={params.slug}
            />
            <MenuCard
                menu={menu.items}
            />
        </div>
    )
}
export default Menu