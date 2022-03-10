import GlobalGraph from "./GlobalGraph";
import CountryGraph from "./CountryGraph";
import {useState} from "react";
import {useSelector} from "react-redux";

function Graphics(props) {

    const inputDefaultValue = "Global"
    const inputValue = useSelector((state) => state.data.selectInput)
    console.log(inputValue)

    return (
        <div className={"Graphics"}>
            {inputValue ? (
                <CountryGraph/>
            )
                :
                <GlobalGraph inputDefaultValue={inputDefaultValue}/>}
        </div>
    );
}

export default Graphics;
