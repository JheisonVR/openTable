import React from 'react'

import { RestaurantCardProps } from '../page'
import Link from 'next/link'
import { Price } from './Price'
import { Stars } from './Stars'



interface Props{
    restaurants: RestaurantCardProps
}


export const RestaurantCard = ( {restaurants}: Props ) => {
    return (
        <div key={restaurants.id} className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        {/* <Image
            src={res.main_image}
            alt='Image'
            width='300'
            height='100'
        /> */}
            <img
            src={restaurants.main_image}
            alt="image"
            className="w-full h-36"
            />
            
            <div className="p-1 text-blue-950">
                <Link href={`/restaurant/${restaurants.slug}`} ><h3 className="font-bold text-2xl mb-2">{restaurants.name}</h3></Link>
                <div className="flex items-start">
                    <Stars reviews={restaurants.reviews} />
                    <p className="ml-2">{restaurants.reviews.length} review{restaurants.reviews.length === 1 ? '':'s' }</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3">{restaurants.cusine.name}</p>
                    <Price price={restaurants.price_category}/>
                    <p>{restaurants.location.name}</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
            </div>
    </div>
        
    )
}