import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';

function BoostrapChart(props) {

const [deneme,setDeneme] = useState([])
    console.log(deneme.map((x)=>x))

    useEffect(()=> {
        const countrySiralama = async () => {
            await fetch("https://covid19.mathdro.id/api/daily/").then((response)=>{
                response.json().then((json)=> {
                    setDeneme(json)
                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        countrySiralama()

    },[])

    const data = [
        {
            year: deneme.map((x)=>x?.reportDate),
            value: deneme.map((x)=>x?.totalConfirmed),
            count:20
        },
        {
            year: '1992',
            value: 4,
            count: 4,
        },
        {
            year: '1993',
            value: 3.5,
            count: 5,
        },
        {
            year: '1994',
            value: 5,
            count: 5,
        },
        {
            year: '1995',
            value: 4.9,
            count: 4.9,
        },
        {
            year: '1996',
            value: 6,
            count: 35,
        },
        {
            year: '1997',
            value: 7,
            count: 7,
        },
        {
            year: '1998',
            value: 9,
            count: 1,
        },
        {
            year: '1999',
            value: 13,
            count: 20,
        },
    ];
    const config = {
        data: [data, data],
        xField: 'year',
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
        <div>
            <DualAxes {...config} />
        </div>
    );
}

export default BoostrapChart;
