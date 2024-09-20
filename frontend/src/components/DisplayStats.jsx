import React from 'react';

const DisplayStats = ({ stats, loading }) => {
    return (
        <div className="relative bg-slate-600 w-full h-96 flex justify-center">
            
            <div className="relative bg-white w-11/12 rounded-3xl z-10 p-6 flex flex-col space-y-4 overflow-y-auto">
            <header className="text-purple-600 text-5xl mt-2 text-center font-semibold">Results:</header>
                {loading ? (
                    <div className="text-black text-center text-3xl">Loading Data...</div>
                ) : (

                    stats.map((player, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <h2 className="text-xl text-purple-600 font-semibold mb-2">{player.name}</h2>
                            <div className="space-y-2">
                                {player.stats.length === 0 ? (                                      /* triple equal means both value and TYPE must be the same! */
                                    <div className="text-gray-500 text-lg">
                                        No stats available for this player (Chances are they never play)
                                    </div>

                                ) : (
                                    <>
                                        {/* Header Row */}
                                        <div className="grid grid-cols-4 gap-4 font-semibold text-gray-800 border-b pb-2">
                                            <span>Category</span>
                                            <span>Line</span>
                                            <span className="text-green-500">Over</span>
                                            <span className="text-red-500">Under</span>
                                        </div>
                                        {/* Stats Rows */}
                                        {player.stats.map((stat, i) => (
                                            <div key={i} className="grid grid-cols-4 gap-4 text-gray-700">
                                                <span className="font-medium">{stat.category}</span>
                                                <span>{stat.line}</span>
                                                <span className="text-green-500">{stat.over}</span>
                                                <span className="text-red-500">{stat.under}</span>
                                            </div>
                                        ))}
                                    </>
                                )}

                            </div>
                        </div>
                    ))

                )

                }

            </div>
        </div>
    );
}

export default DisplayStats;
