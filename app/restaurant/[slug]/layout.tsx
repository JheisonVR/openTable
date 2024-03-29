import React from 'react'
import { HeaderRestaurant } from './components'

const layout = (
    {
        children,
        params
    }:{
        children: React.ReactNode;
        params: {slug:string};
    }
) => {
    return (
        <main>
            <HeaderRestaurant
                name={params.slug}
            />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-blue-950">
                    {children}
                </div>
        </main>
    )
}

export default layout
