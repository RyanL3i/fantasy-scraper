import React from 'react'
import Disclaimer from '../components/Disclaimer'
import Search from '../components/Search'

const Home = () => {
    return (
        <div className="flex flex-col">
            <Disclaimer />
            <div className="bg-slate-600">
                <p className="text-white text-center text-4xl mt-6">
                    Who2Start
                </p>
            </div>
            <Search />
        </div>

    )
}

export default Home
