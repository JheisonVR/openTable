import React from 'react'
import { Header, NavBar } from '../components'
import { HeaderSearch, SearchRestaurantCard, SearchSideBar } from './components'
import { SearchBar } from '../components/SearchBar'

const SearchPage = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar/>
                {/* HEADER */}
                <HeaderSearch/>
                <div className="flex py-4 m-auto w-2/3 justify-between items-start text-blue-950">
                    <SearchSideBar/>
                    <div className="w-5/6">
                        <SearchRestaurantCard/>
                    </div>
                </div>
            </main>
        </main>
  )
}
 export default SearchPage