import React, {useState,useEffect} from 'react';
import { Line } from '@ant-design/plots';
import { DualAxes } from '@ant-design/plots';
import {useSelector} from "react-redux";

function GlobalLineGraphics(props) {

    const items = useSelector((state) => state.data.items)
    const [dates,setDates] = useState([])
    console.log(dates.map((x)=>x))

    useEffect(()=> {
        const fetchGlobal = async () => {
            await fetch("https://covid19.mathdro.id/api/daily").then((response)=>{
                response.json().then((json)=> {
                    setDates(json)
                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        fetchGlobal()

    },[])



    const data = [
        {
            date: dates.map((x)=>x.reportDate),
            infected: dates.map((x)=>x?.totalConfirmed),
            deaths: dates.map((x)=>x?.deaths.total),
        },

    ];
    const config = {
        data: [data, data],
        xField: 'date',
        yField: ['infected', 'deaths'],
        geometryOptions: [
            {
                geometry: 'line',
                color: 'blue',
            },
            {
                geometry: 'line',
                color: 'red',
            },
        ],
    }

    return (
        <div className={"globalGraphics"}>
            <DualAxes {...config} />
        </div>
    );
}

export default GlobalLineGraphics;
