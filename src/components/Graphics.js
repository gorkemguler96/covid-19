import React, {useEffect, useState} from 'react';
import {Chart as ChartJs, BarElement, PointElement,CategoryScale, LinearScale} from "chart.js";
import { Bar } from "react-chartjs-2";
import {useSelector,useDispatch} from "react-redux";
import {fetchData} from '../redux/dataSlice'

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement
)

function Graphics(props) {

    const [chart,setChart] = useState([])
    const dispatch = useDispatch();
    const baseURL = "https://api.coinranking.com/v2/coins/?limit=10"
    const proxyURL = "https://cors-anywhere.herokuapp.com/"
    const apiKey = "coinranking4d4f834de3056e85cb1e81f1c68ff0b6881cbf1e5a833468"

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyURL}${baseURL}`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((response)=>{
                response.json().then((json)=> {
                    setChart(json.data)
                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        fetchCoins()
    },[baseURL, proxyURL, apiKey])

   const data = {
        labels: chart?.coins?.map((x)=> x.name),
            datasets: [{
            label: `${chart?.coins?.map((x)=>x.name.length)} Coins Available`,
            data: chart?.coins?.map((x)=> x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }]
    }

    useEffect(()=> {
        dispatch(fetchData())
    },[])

    return (
        <div className={"Graphics"}>
           <h5>{chart?.coins?.length} Coins Aviable</h5>
            <Bar height={100} type={"bar"} data={data}/>
        </div>
    );
}

export default Graphics;
