import React from 'react'
import Disclaimer from '../components/Disclaimer'
import SearchBar from '../components/SearchBar'
import SelectedPlayers from '../components/SelectedPlayers'

const Home = () => {
    return (
        <div>
            <Disclaimer/>
            <div className="bg-slate-600 flex flex-row">
                <SearchBar />
                <SelectedPlayers />
            </div>
        </div>

    )
}

export default Home
