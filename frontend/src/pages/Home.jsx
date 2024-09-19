import React from 'react'
import Disclaimer from '../components/Disclaimer'
import SearchBar from '../components/SearchBar'
import DisplayStats from '../components/DisplayStats'

const Home = () => {
    return (
        <div>
            <Disclaimer/>
            <SearchBar />
            <DisplayStats/>
        </div>

    )
}

export default Home
