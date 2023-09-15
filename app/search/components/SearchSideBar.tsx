import { PRICE_CATEGORY } from '@prisma/client';
import Link from 'next/link'
import React from 'react'

interface cities {
    id: number;
    name: string;
}

interface cuisines {
    id: number;
    name: string;
}

export const SearchSideBar = ({
    cities, 
    cuisines,
    searchParams
} : {
    cities:cities[]; 
    cuisines: cuisines[];
    searchParams : {city?:string; cusine?:string; price?:PRICE_CATEGORY }
}) => {
    return (
        <div className="w-1/5">
            <div className="border-b pb-4 flex flex-col">
                <h1 className="mb-2 font-bold">Locations</h1>
                {cities.length ? 
                    cities.map(city => (
                        <Link 
                            key={city.id} 
                            href={{
                                pathname:`/search`,
                                query:{
                                    ...searchParams,
                                    city:city.name
                                }
                            }}                                 
                            ><p className="font-light text-reg capitalize">{city.name}
                            </p>
                        </Link>
                    ))
                    :
                    <p>No Cities</p>
                }                
            </div>
            <div className="border-b pb-4 mt-3 flex flex-col">
                <h1 className="mb-2 font-bold">Cuisine</h1>
                {cuisines.length ?
                    cuisines.map(cu => (
                        <Link 
                            key={cu.id}
                            href={{
                                pathname:'/search',
                                query:{
                                    ...searchParams,
                                    cusine:cu.name
                                }
                            }} 
                            className='font-light capitalize' 
                        >{cu.name}
                        </Link>
                    ))
                :
                <p>No Cuisines</p>                
                }
                {/* <p className="font-light text-reg">Mexican</p>
                <p className="font-light text-reg">Italian</p>
                <p className="font-light text-reg">Chinese</p> */}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2 font-bold">Price</h1>
                <div className="flex">
                    <button className="border w-full text-reg font-light rounded-l p-2">
                    $
                    </button>
                    <button className="border-r border-t border-b w-full text-reg font-light p-2">
                    $$
                    </button>
                    <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
                    $$$
                    </button>
                </div>
            </div>
        </div>
    )
}