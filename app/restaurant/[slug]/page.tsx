import { PrismaClient } from '@prisma/client'
import { RestaurantCard } from './components'
//import async from '../../../pages/api/seed';


const prisma = new PrismaClient();

export interface Restaurant {
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
}

const fetchRestaurantBySlug = async ( slug:string ): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where:{
            slug,
        },
        select:{
            id:true,
            name: true,
            images: true,
            description:true,
            slug:true
        }
    })

    if(!restaurant) throw new Error

    return restaurant
}


const RestaurantDetails = async ({params}: {params: {slug:string}}) => {

    const restaurant = await fetchRestaurantBySlug(params.slug)

    return (
        <>
            <RestaurantCard
                restaurant= { restaurant }
                // slug={params.slug}
            />
        </>
    )
}

export default RestaurantDetails