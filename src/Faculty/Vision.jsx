import React from "react";
import TitleCon from "./TitleCon";
import VisionTextCon from "./VisionTextCon";
import { StateProvider } from "./StateContext";

function Vision(){
    return (
        <StateProvider>
            <div className="visionWrap py-[56px] md:py-[72px] px-[5%]">
                <div className="visionCon">
                    <TitleCon/>
                    <VisionTextCon/>
                </div>
            </div>
        </StateProvider>
    )
}

export default Vision;