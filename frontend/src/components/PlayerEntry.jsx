import React from 'react'
import { useState } from 'react'

const player_entry = () => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://flask-players-data.onrender.com/api/players")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return user && user.name && user.name.toLowerCase().includes(value)
                })
                console.log(results);
             })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div id="search-bar-container" className="bg-slate-700 w-full h-24 flex items-center">
            <input className="bg-slate-700 placeholder-fuchsia-600 text-fuchsia-500 text-3xl ml-4 w-full"
                type="text" name="name" placeholder="Search Players: "
                value={input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default player_entry
