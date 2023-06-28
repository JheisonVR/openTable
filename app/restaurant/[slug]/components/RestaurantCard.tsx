
import React from 'react'
import { RestaurantNavbar } from './RestaurantNavbar'
import { ReviewsRestaurant } from './ReviewsRestaurant'

export const RestaurantCard = () => {
    return (
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-blue-950">
            {/* DESCRIPTION PORTION */}
            <div className="bg-white w-[70%] rounded p-3 shadow ">
            <RestaurantNavbar/>    
                {/* TITLE */}
                <div className="mt-4 border-b pb-6">
                    <h1 className="font-bold text-6xl">Milesstone Grill</h1>
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
                {/* RATING */}
                {/* DESCRIPTION */}
                <div className="mt-4">
                    <p className="text-lg font-light">
                        The classics you love prepared with a perfect twist, all served up
                        in an atmosphere that feels just right. That’s the Milestones
                        promise. So, whether you’re celebrating a milestone, making the most
                        of Happy Hour or enjoying brunch with friends, you can be sure that
                        every Milestones experience is a simple and perfectly memorable one.
                    </p>
                </div>
                {/* DESCRIPTION */}
                {/* IMAGES */}
                <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                        5 photos
                    </h1>
                    <div className="flex flex-wrap">
                        <img
                        className="w-56 h-44 mr-1 mb-1"
                        src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                        alt=""
                        />
                        <img
                        className="w-56 h-44 mr-1 mb-1"
                        src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                        alt=""
                        />
                        <img
                        className="w-56 h-44 mr-1 mb-1"
                        src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                        alt=""
                        />
                        <img
                        className="w-56 h-44 mr-1 mb-1"
                        src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                        alt=""
                        />
                        <img
                        className="w-56 h-44 mr-1 mb-1"
                        src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                        alt=""
                        />
                    </div>
                </div>
                <ReviewsRestaurant/>
            </div>
            {/* RESERVATION CARD PORTION */}
            <div className="w-[27%] relative text-reg">
                <div className="fixed w-[15%] bg-white rounded p-3 shadow">
                    <div className="text-center border-b pb-2 font-bold">
                        <h4 className="mr-7 text-lg">Make a Reservation</h4>
                    </div>
                    <div className="my-3 flex flex-col">
                        <label htmlFor="">Party size</label>
                        <select name="" className="py-3 border-b font-light" id="">
                        <option value="">1 person</option>
                        <option value="">2 people</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="">Date</label>
                            <input type="text" className="py-3 border-b font-light w-28" />
                        </div>
                        <div className="flex flex-col w-[48%]">
                            <label htmlFor="">Time</label>
                            <select name="" id="" className="py-3 border-b font-light">
                                <option value="">7:30 AM</option>
                                <option value="">9:30 AM</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button
                        className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
                        >
                        Find a Time
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}