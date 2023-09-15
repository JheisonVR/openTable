// 'use client'
import React from 'react'
import { PRICE_CATEGORY, PrismaClient } from '@prisma/client'

import { HeaderSearch, SearchRestaurantCard, SearchSideBar } from './components'

import { RestaurantCardProps } from '../page'
//import { Header, NavBar } from '../components'
//import { SearchBar } from '../components/SearchBar'

const prisma = new PrismaClient()

//:Promise<RestaurantCardProps[]>

const fetchFilterRestaurantCity = async ( city:string | undefined )  => {

    const select = { 
        id:true,
        name:true,
        main_image:true,
        cusine:true,
        price_category:true,
        location:true,
        slug:true
    }
    
    if(!city) return prisma.restaurant.findMany( {select} );

    return prisma.restaurant.findMany({
        where:{
            location: {
                name:{
                    equals: city.toLowerCase()
                }
            }
        },
        select
    });
}

const fetchCities = async () => {
    return prisma.location.findMany({
        select:{
            id:true,
            name:true,
        }
    })
}

const fetchCuisine = async () => {
    return prisma.cusine.findMany({
        select:{
            id:true,
            name:true
        }
    })
}


const SearchPage = async ({
    searchParams
} : {
    searchParams: {city?:string; cusine?:string; price?:PRICE_CATEGORY } 
}) => {

    const restaurants = await fetchFilterRestaurantCity(searchParams.city);
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