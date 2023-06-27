"use Client";

import React, { ChangeEvent, useState } from 'react'


export const Header = () => {

    // const [searchText, setSearchText] = useState('')

    const onChangeSearch = (event:ChangeEvent<HTMLInputElement>)  => {
        console.log(
            event.target.value
        )
    }


    return (
        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
            <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
            </h1>
            {/* SEARCH BAR */}
            <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input
                    className="rounded mr-3 p-2 w-[450px] text-cyan-800 "
                    type="text"
                    placeholder="State, city or town"
                    // onChange={onChangeSearch}
                />
                <button className="rounded bg-red-600 px-9 py-2 text-white">
                Lets go
                </button>
            </div>
            {/* SEARCH BAR */}
            </div>
        </div>




        // <div className="h-96 overflow-hidden">
        //     <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        //         <h1 className="text-7xl text-white captitalize text-shadow text-center">
        //             Milestones Grill (Toronto)
        //         </h1>
        //     </div>
        // </div>
    )
}
