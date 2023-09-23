// 'use client'
import React from 'react'
import { PRICE_CATEGORY, PrismaClient } from '@prisma/client'

import { HeaderSearch, SearchRestaurantCard, SearchSideBar } from './components'


const prisma = new PrismaClient()
interface Searchparams {
    city?:string; 
    cusine?:string; 
    price?:PRICE_CATEGORY 
}




const fetchFilterRestaurantCity = async (  {city, cusine, price} :Searchparams )  => {

    const where:any = {}

    if(city){
        const location = {
            name:{
                equals: city.toLowerCase()
            }
        }
        where.location = location
    }

    if(cusine){
        const cusines = {
            name:{
                equals:cusine.toLowerCase()
            }
        }
        where.cusine = cusines
    }

    if(price){
        const prices = {            
            equals: price            
        }
        where.price_category = prices
    }

    const select = { 
        id:true,
        name:true,
        main_image:true,
        cusine:true,
        price_category:true,
        location:true,
        slug:true,
        reviews:true
    }
    
    if(!city) return prisma.restaurant.findMany( {select} );

    return prisma.restaurant.findMany({
        where,
        select
    });
}



const fetchCities = async () => {
    return prisma.location.findMany({
        select:{
            id:true,
            name:true,
        },
        // where:{
        //     price_category:{
        //         equals:PRICE_CATEGORY
        //     }
        // }
    })
}

const fetchCuisine = async ( ) => {
    return prisma.cusine.findMany({
        select:{
            id:true,
            name:true
        },
    })
}

// const fetchAllQuery = async () => {
//     return prisma.restaurant.findMany({
//         select:{
//             id:true,
//             name:true,
//             cusine: {
//                 select:{
//                     id:true,
//                     name:true
//                 }
//             },
//             price_category: true,
//             location:{
//                 select:{
//                     name:true,
//                     id:true
//                 }
//             }            
//         }
//     })
// }


const SearchPage = async ({
    searchParams
} : {
    searchParams: Searchparams 
}) => {

    const restaurants = await fetchFilterRestaurantCity(searchParams);
    const locations = await fetchCities();
    const cuisines = await fetchCuisine();

    return (
        <>
            <HeaderSearch/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start text-blue-950">
                <SearchSideBar
                    cities = {locations}
                    cuisines = {cuisines}
                    searchParams={searchParams}
                />
                <div className="w-5/6">
                    {
                        restaurants.length ?
                        restaurants.map(rest => (
                            <SearchRestaurantCard
                                key={rest.id}
                                restaurant = {rest}
                            />
                        )) 
                        :
                        <h1> Sorry, we found no restaurants in {searchParams.city} </h1>
                    }

                </div>
            </div>
        </>
    )
}
export default SearchPage