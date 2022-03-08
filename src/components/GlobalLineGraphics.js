import React, {useState,useEffect} from 'react';
import { Line } from '@ant-design/plots';
import { DualAxes } from '@ant-design/plots';
import {useSelector} from "react-redux";

function GlobalLineGraphics(props) {

    const items = useSelector((state) => state.data.items)
    const [dates,setDates] = useState([])
    console.log(items)

    useEffect(()=> {
        const fetchGlobal = async () => {
            await fetch("https://covid19.mathdro.id/api/daily").then((response)=>{
                response.json().then((json)=> {
                    setDates(json.map((x)=>x.reportDate))
                    console.log(json)
                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        fetchGlobal()

    },[])

    const data = [
        {
            date: dates,
            value: `${items?.deaths?.value}`,
            count: 20000000,
        },
        {
            date: dates,
            value: `${items?.confirmed?.value}`,
            count: 120000000,
        }
    ];
    const config = {
        data: [data, data],
        xField: 'date',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'line',
                color: '#5B8FF9',
            },
            {
                geometry: 'line',
                color: '#5AD8A6',
            },
        ],
    };

    return (
        <div className={"globalGraphics"}>
            <DualAxes {...config} />
        </div>
    );
}

export default GlobalLineGraphics;
