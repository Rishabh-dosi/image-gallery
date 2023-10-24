import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

export default function Searchbar() {
    const [value, setValue] = useState("");
    const { fetchData } = useContext(ImageContext);
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            fetchData(value)
        }
    }
    return (
        <div className="flex justify-around">
            <input type="text" onChange={(e) => { setValue(e.target.value) }}
                className="border-2 border-black m-1 rounded-[10px] p-2"
                placeholder="Search here"
            onKeyDown={handleKey}/>
            
        </div>
    )
}