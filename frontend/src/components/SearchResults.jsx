import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const SearchResults = ({ results, loading, found }) => {
    // Check if results is not an array
    if (loading) {
        return (
            <div className="bg-purple-900 h-56 flex flex-col items-center justify-center overflow-y-auto rounded-3xl">
                <AiOutlineLoading3Quarters className="text-4xl text-white"/>
            </div>
        );
    }
    if (!found) {
        return (
            <div className="bg-purple-900 h-56 flex flex-col items-center justify-center overflow-y-auto rounded-3xl">
                <p className="text-white text-3xl">No results found.</p>
            </div>
        );
    }

    return (
        <div className="bg-purple-900 h-56 flex flex-col overflow-y-auto rounded-3xl">
            {
                results.map((result, id) => {                                                       // take in results, json file with all player data
                    const player_name = Object.keys(result)[0];                                     // get all keys and put in result, from which we want the first key [0] (the name)
                    const player_pos = result[player_name];                                         // dictionary[player_name] = position

                    return (                                                                        // note we need an id for map() function
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
