import GlobalGraph from "./GlobalGraph";
import CountryGraph from "./CountryGraph";

function Graphics(props) {
    return (
        <div className={"Graphics"}>
            <CountryGraph/>
            <GlobalGraph/>
        </div>
    );
}

export default Graphics;
