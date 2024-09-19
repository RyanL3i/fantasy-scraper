import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayStats = ({ player_list }) => {
    const [playerStats, setPlayerStats] = useState([]);

    useEffect(() => {
        const fetchPlayerStats = async () => {
            try {
                const response = await axios.post('https://flask-players-data.onrender.com/api/scrape', { players: player_list });           // "players" is what the api expects, check the python!
                setPlayerStats(response.data)
            }
            catch (error) {
                console.error("error fetching stats: ", error)
            }
        }

        fetchPlayerStats()
    }, [player_list])

    return (
        <div className="relative bg-slate-600 w-full h-96 flex justify-center">
            <div className="relative bg-white w-11/12 rounded-3xl z-10 flex">
                {/* Pink divider */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-slate-600 w-2 h-full z-20"></div>

                {/* Left column */}
                <div className="w-1/2 p-4">
                    {playerStats.filter((_, index) => index % 2 === 0).map((player, index) => (
                        <div key={index}>
                            <h3 className="font-bold">{player.name}</h3>
                            {player.stats.map((stat, idx) => (
                                <p key={idx}>
                                    {stat.category}: {stat.line}, Over: {stat.over}, Under: {stat.under}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Right column */}
                <div className="w-1/2 p-4">
                    {playerStats.filter((_, index) => index % 2 !== 0).map((player, index) => (
                        <div key={index}>
                            <h3 className="font-bold">{player.name}</h3>
                            {player.stats.map((stat, idx) => (
                                <p key={idx}>
                                    {stat.category}: {stat.line}, Over: {stat.over}, Under: {stat.under}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DisplayStats
