import { Header, RestaurantCard } from './components'
import { Cusine, PRICE_CATEGORY, PrismaClient, location } from '@prisma/client'
import async from '../pages/api/seed';

const prisma = new PrismaClient();

export interface RestaurantCardProps {
  id:number
  name:string
  slug:string
  main_image:string
  cusine:Cusine,
  location:location
  price_category:PRICE_CATEGORY
}


const fetchRestaurants = async (): Promise<RestaurantCardProps[]> => {
  const restaurants = prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      slug:true,
      main_image:true,
      cusine:true,
      location:true,
      price_category:true
    }
  });
  return restaurants
}


export default async function Home() {

  const restaurants = await fetchRestaurants();
  // console.log(restaurants)

  return (      
        <>          
          <Header/>
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {restaurants.map((r) => (              
              <RestaurantCard
                key={r.id}
                restaurants = {r}
              />  
            ))}
          </div>
        </>
    )
}
