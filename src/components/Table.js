import React from 'react';
import CountryTable from "./CountryTable";
import GlobalTable from "./GlobalTable";
import {useSelector} from "react-redux";

function Table(props) {

    const inputValue = useSelector((state) => state.data.selectInput)


    return (
        <div className={"Table"}>
            {inputValue ? (
                <CountryTable/>
            )
                :
                <GlobalTable/>
            }
        </div>
    );
}

export default Table;
