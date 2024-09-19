import React from 'react'
import { FaTrash } from "react-icons/fa";


const SelectedPlayers = ({ players, onRemove }) => {
    return (
        <div className="w-full m-10 flex flex-col items-center">
            <div className="w-full bg-black h-64 flex flex-col rounded-3xl overflow-y-auto">
                <header className="text-purple-600 text-3xl mt-4 text-center">Selected Players: </header>
                {players.map((player, id) => (
                    <div className="flex items-center justify-between text-xl">
                        <div key={id} className="m-4 text-white">
                            {player}
                        </div>
                        <button className="mr-4 text-red-700 hover:text-red-500" onClick={() => onRemove(player)}><FaTrash /></button>
                    </div>
                ))}
            </div>
            <button className="bg-purple-600 mt-4 rounded-2xl hover:bg-white text-white hover:text-purple-600">
                <p className="m-2">
                    Submit!
                </p>
            </button>
        </div>
    )
}

export default SelectedPlayers
