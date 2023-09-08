import React from 'react'

import { Item } from '@prisma/client'



export const MenuCard = ( {menu} :{menu: Item[]} ) => {
    return (
        <main className="bg-white mt-5">
            <div>
                <div className="mt-4 pb-1 mb-1">
                    <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                {/* {menu.map(m=>(
                    <div key={m.id} >
                        <h1>{m.name}</h1>
                    </div>
                ))}     */}
                    {/* MENU CARD */}

                        { menu.length ? menu.map(me =>(
                            <div key={me.id} className=" border rounded p-3 w-[49%] mb-3">
                                <h3 className="font-bold text-lg">{me.name}</h3>
                                <p className="font-light mt-1 text-sm">
                                    {me.description}
                                </p>
                                <p className="mt-7">{me.price}</p>
                            </div>
                        ))
                        :
                        <div>
                            <h1>Not menu</h1>
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}

