import React from "react";
import Bg from '../bg.jpg';
import { Switch } from "@mui/material";
function Header({ children }) {
    return (
        <>
            <div className="flex h-[4rem] align-middle p-2 justify-evenly bg-[#e0e0e0]">
                <p className="text-[1.5rem] align-middle items-center font-['Pacifico']">
                    Image Gallery
                </p>
                <div className="p-1 flex justify-between gap-3">
                    {children}
                </div>
                <div className="flex gap-[50px] align-middle p-3 capitalize font-['Pacifico']">
                    <ul className="align-middle">
                        explore
                    </ul>
                    <ul>
                        collection
                    </ul>
                    <ul>
                        community
                    </ul>
                    <ul>
                        <Switch color="secondary" /> Dark Mode
                    </ul>

                </div>

            </div>
            <div className=" w-full h-64 bg-center bg-contain text-black font-bold text-[2rem] flex-col justify-center items-center p-10" style={{ backgroundImage: `url(${Bg})` }}>

                <div className=" flex items-center justify-center">
                    Download High Quality Images by Creators
                </div>
                <div className=" flex items-center justify-center">
                    {children}
                </div>
                
            </div>
        </>
    )
}
export default Header