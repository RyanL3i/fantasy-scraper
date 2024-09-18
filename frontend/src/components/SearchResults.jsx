import React from 'react';

const SearchResults = ({ results, loading }) => {
    // Check if results is not an array
    if (loading) {
        return (
            <div className="bg-purple-900 h-56 flex flex-col items-center justify-center overflow-y-auto rounded-3xl">
                <div className="text-5xl text-white text-center">Loading... (First search takes quite long)</div>
            </div>
        );
    }

    return (
        <div className="bg-purple-900 h-56 flex flex-col overflow-y-auto rounded-3xl">
            {
                results.map((result, id) => {
                    const player_name = Object.keys(result)[0];
                    const player_pos = result[player_name];
                    return (
                        <div key={id} className="p-4 text-white hover:bg-purple-700">
                            {player_name} - {player_pos}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SearchResults;
