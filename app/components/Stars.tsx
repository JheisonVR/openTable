import React from 'react'

import fullStar from '../../public/icons/full-star.png'
import halfStar from '../../public/icons/half-star.png'
import emptyStar from '../../public/icons/empty-star.png'
import Image from 'next/image'
import { Review } from '@prisma/client'
import { calculateReviewRatingAverage } from '@/utils/calculateReviewRatingAverage'

export const Stars = ({reviews}:{reviews:Review[]} ) => {

    const rating = calculateReviewRatingAverage(reviews)

  return (
    <Image
        src={fullStar}
        alt='Star_Full'
    />
  )
}
