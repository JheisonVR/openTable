import React from 'react'
import { Header, NavBar } from '../components'
import { HeaderSearch, SearchRestaurantCard, SearchSideBar } from './components'
import { SearchBar } from '../components/SearchBar'

const SearchPage = () => {
    return (
        <>
            <HeaderSearch/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start text-blue-950">
                <SearchSideBar/>
                <div className="w-5/6">
                    <SearchRestaurantCard/>
                </div>
            </div>
        </>
    )
}
export default SearchPage