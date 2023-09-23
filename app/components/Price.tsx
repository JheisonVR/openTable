import React from 'react'
import { PRICE_CATEGORY } from '@prisma/client'

export const Price = ( {price} : {price:PRICE_CATEGORY} ) => {

    const renderPrice = () => {
        if(price === PRICE_CATEGORY.Cheap){
            return (
                <>
                    <span>$$</span><span className='text-gray-400'>$$</span>
                </>
            )
        }else if (price === PRICE_CATEGORY.Regular){
            return (
                <>
                    <span>$$$</span><span className='text-gray-400'>$</span>
                </>
            )
        }else {
            return (
                <>
                    <span>$$$$</span>
                </>
            )
        }
    }

  return (
    <p className='flex mr-3'>{renderPrice()}</p>
  )
}
