import React from 'react'
import { useState } from 'react'
import SearchResults from './SearchResults'
import SelectedPlayers from './SelectedPlayers'

const SearchBar = () => {
    const [results, setResults] = useState([]);          // results var for the data we are loading in from backend
    const [input, setInput] = useState("");             //input is what the user typed, to be matched with data
    const [loading, setLoading] = useState(false);      //loading if we are actively matching/sending queries, inform user
    const [found, setFound] = useState(false);          // add a no results found if no player match
    const [selected, setSelected] = useState([]);

    const fetchData = (value) => {                      // beginning of fetch_data, where we are loading data from our api
        setLoading(true);                               // we are currently loading stuff

        fetch("https://nfl-player-list.web.app/data.json")        //this section fetches data (promise), then takes it (response) and converts it to json (json)
            .then((response) => response.json())
            .then((json) => {

                const results = json.filter((iterable) => {                                 // we want results, which is something we can cycle through and match against!

                    if (typeof iterable === 'object' && Object.keys(iterable).length > 0) {     // "filter" works on lists, we are taking a iterable, confirming it's an object
                        // and that the key length (name) is greater than 0, meaning it is a name and not "None"

                        const playerName = Object.keys(iterable)[0];                            // only if we have a legit key, we get all keys, and take the first [0]
                        return playerName.toLowerCase().includes(value.toLowerCase());          //if the player we just found includes what we entered "value", returns TRUE! (case insens)

                    }
                    return false;                                                               // return false
                });
                console.log(results);
                if (results.length == 0) {
                    setFound(false);
                }
                else {
                    setFound(true);
                }
                setLoading(false);                                                           //once we are about to set the results, we can change off the loading message
                setResults(results);
            })
    }

    // function to handle a change, takes in a value and sets the input variable to "value", storing this input to be used!
    // also calls fetchData with value, see above
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    // function to handle what happens when we click (select) a player
    const handleSelect = (player) => {
        if (!selected.includes(player)) {
            setSelected([...selected, player]);
        }
    }

    // function to handle unselecting a player
    const handleUnselect = (player) => {
        setSelected(selected.filter((p) => p != player));               // filters selected down to just those p's (iterables) that don't equal player
    };

    return (
        <div className="bg-slate-600 flex flex-row">
            <div className="w-full m-10">
                <div id="search-bar-container" className="bg-black h-16 flex items-center rounded-3xl">
                    <input className=" bg-black placeholder-white text-white text-xl mx-4 w-full rounded-2xl"
                        type="text" name="name" placeholder="Search Players: "
                        value={input}
                        onChange={(e) => handleChange(e.target.value)} />
                    {/* when there's a change, e (the change) goes to the target's (html element) value (the thing changed or text*/}
                </div>
                <SearchResults results={results} loading={loading} found={found} onSelect={handleSelect} />
            </div>
            <SelectedPlayers players={selected} onRemove={handleUnselect} />
        </div>

    )
}

export default SearchBar
