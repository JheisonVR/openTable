import Image from 'next/image'
import { NavBar, Header, RestaurantCard } from './components'

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">        
        <NavBar/>
        <main>

          {/* HEADER */}
          <Header/>
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard/>
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
    )
}
