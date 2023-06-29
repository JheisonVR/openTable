
import { Header, RestaurantCard } from './components'

export default function Home() {
  return (      
        <>          
          <Header/>
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard/>
          </div>
        </>
    )
}
