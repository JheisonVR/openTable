
import React from 'react'
import { RestaurantNavbar } from './RestaurantNavbar'
import { ReviewsRestaurant } from './ReviewsRestaurant'
import { RestaurantReservationCard } from './RestaurantReservationCard'
import { Restaurant } from '../page'
import Image from 'next/image'



export const RestaurantCard = ( {restaurant}: {restaurant:Restaurant} ) => {
    return (
        < >
            {/* DESCRIPTION PORTION */}
            <div className="bg-white w-[70%] rounded p-3 shadow ">
            <RestaurantNavbar
                slug={restaurant.slug}
            />    
                {/* TITLE */}
                <div className="mt-4 border-b pb-6">
                    <h1 className="font-bold text-6xl">{restaurant.name}</h1>
                </div>

                {/* RATING */}
                <div className="flex items-end">
                    <div className="ratings mt-2 flex items-center">
                        <p>*****</p>
                        <p className="text-reg ml-3">4.9</p>
                    </div>
                    <div>
                        <p className="text-reg ml-4">600 Reviews</p>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-4">
                    <p className="text-lg font-light">
                        {restaurant.description}
                    </p>
                </div>

                {/* IMAGES */}
                <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                        {restaurant.images.length} photo{restaurant.images.length >1 ? 's' :''}
                    </h1>
                    <div className="flex flex-wrap">
                        {restaurant.images.map((img,i)=>(
                            
                            <Image
                            key={i}
                            width={200}
                            height={200}
                            src={img}
                            alt=''
                            />

                            /* <img
                            key={i}
                            className="w-56 h-44 mr-1 mb-1"
                            src={img}
                            alt=''
                            />*/
                        ))}
                    </div>
                </div>
                <ReviewsRestaurant/>
            </div>
            <RestaurantReservationCard/>
        </>
    )
}
