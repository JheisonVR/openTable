
import React from 'react'
import { RestaurantNavbar } from './RestaurantNavbar'
import { ReviewsRestaurant } from './ReviewsRestaurant'
import { RestaurantReservationCard } from './RestaurantReservationCard'
import { Restaurant } from '../page'
import Image from 'next/image'
import { calculateReviewRatingAverage } from '@/utils/calculateReviewRatingAverage'
import { Stars } from '@/app/components'



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
                        <Stars reviews={restaurant.reviews} />
                        
                        <p className="text-reg ml-3">{ calculateReviewRatingAverage( restaurant.reviews).toFixed(1)}</p>
                    </div>
                    <div>
                        <p className="text-reg ml-4">{restaurant.reviews.length} Review{restaurant.reviews.length === 1 ? '':'s' }  </p>
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
                <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                    What 100 people are saying
                </h1>
                {restaurant.reviews.map(( review )=>(
                    <ReviewsRestaurant
                        key={review.id}
                        review = {review}
                    />
                ))}
            </div>
            <RestaurantReservationCard/>
        </>
    )
}
