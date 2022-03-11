import GlobalGraph from "./GlobalGraph";
import {useSelector} from "react-redux";
import CountryGraph from "./CountryGraph";

function Graphics(props) {

    const inputDefaultValue = "Global"
    const inputValue = useSelector((state) => state.data.selectInput)

    return (
        <div className={"Graphics"}>
            {inputValue ? <CountryGraph/> : <GlobalGraph inputDefaultValue={inputDefaultValue}/>}
        </div>
    );
}

export default Graphics;
