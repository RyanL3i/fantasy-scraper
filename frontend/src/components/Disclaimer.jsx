import React from 'react'
import { IoWarningOutline } from "react-icons/io5";


const Disclaimer = () => {
    return (
        <div className="w-full bg-yellow-300 h-18 flex flex-row justify-center items-center">
            <IoWarningOutline className="text-4xl mx-1 md:mx-12"/>
            {/* <p className="text-black text-sm md:text-lg m-2 text-center">
                Apologies for the long wait when searching... Free backend hosting services allow very limited search and lookup rates :(
                    <br/>
                Each letter typed queues a brand new search... for best results, type the <strong>least # letters that would easily find a specific player</strong>, thanks :)
            </p> */}
            <p className="text-black text-sm md:text-lg m-2 text-center"> 
                If the autofill/players are not showing up, try clearing browser cache! <br/>
                It is recommended you add players grouped by position for easy comparison.
            </p>
            <IoWarningOutline className="text-4xl mx-1 md:mx-12"/>
        </div>
    )
}

export default Disclaimer
