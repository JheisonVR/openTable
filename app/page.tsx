import { Header, RestaurantCard } from './components'
import { PrismaClient } from '@prisma/client'
import async from '../pages/api/seed';

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  const restaurants = prisma.restaurant.findMany();
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
            {restaurants.map((r,i) => (
              
              <RestaurantCard
                key={i}
              />  
            ))}
            <RestaurantCard/>
          </div>
        </>
    )
}
