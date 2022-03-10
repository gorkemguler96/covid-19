import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';

function GlobalGraph(props) {

const [data,setData] = useState([])
const [deneme,setDeneme] = useState([])

    useEffect(()=> {
        const countrySiralama = async () => {
            await fetch("https://covid19.mathdro.id/api/daily/").then((response)=>{
                response.json().then((json)=> {
                    setDeneme(json.map((x)=>x.deaths))
                    setData(json.map((x)=>x))

                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        countrySiralama()

    },[])


    const config = {
        data: [data, data],
        xField: 'reportDate',
        yField: [`totalConfirmed`,`${data?.map(x=>x?.deaths?.total)}`],
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

export default GlobalGraph;
