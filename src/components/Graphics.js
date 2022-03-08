import React, {useEffect, useState} from 'react';
import {Select,} from 'antd';
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import { Column } from '@ant-design/plots';
import GlobalLineGraphics from "./GlobalLineGraphics";




function Graphics(props) {

    const { Option } = Select;
    const [chart,setChart] = useState([])
    const [selectInput,setSelectInput] = useState([])
    const dispatch = useDispatch();
    const items = useSelector((state) => state.data.items)

    // useEffect(() => {
    //     const fetchCoins = async () => {
    //         await fetch(`${proxyURL}${baseURL}`, {
    //             method: 'GET',
    //             headers: {
    //                 'content-Type': 'application/json',
    //                 'x-access-token': `${apiKey}`,
    //                 'Access-Control-Allow-Origin': '*'
    //             }
    //         }).then((response)=>{
    //             response.json().then((json)=> {
    //                 setChart(json.data)
    //             })
    //         }).catch((error)=>{
    //             console.log(error)
    //         })
    //     }
    //     fetchCoins()
    // },[baseURL, proxyURL, apiKey])

    useEffect(()=> {
        const fetchCoins = async () => {
            await fetch("https://covid19.mathdro.id/api/countries/TR").then((response)=>{
                response.json().then((json)=> {
                    setChart(json)
                    console.log(chart)
                })
            })
        }
        fetchCoins()

    },[])

    useEffect(()=> {
        const fetchCountry = async () => {
            await fetch("https://covid19.mathdro.id/api/countries/").then((response)=>{
                response.json().then((json)=> {
                    setSelectInput(json)
                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        fetchCountry()

    },[])

    const data = [
        {
            type: 'Recovered',
            quantity: `${chart?.recovered?.value}`,
        },
        {
            type: 'Deaths',
            quantity: `${chart?.deaths?.value}`,
        },
        {
            type: 'Active',
            quantity: `${chart?.confirmed?.value- chart?.deaths?.value}`,
        },
        {
            type: 'Infected',
            quantity: `${chart?.confirmed?.value}`,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'quantity',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'category',
            },
            sales: {
                alias: 'quantity',
            },
        },
    };


    return (
        <div className={"Graphics"}>
            <Select style={{width:426}} defaultValue="Afghanistan">
                {selectInput?.countries?.map((x,index)=> (
                    <Option key={x.name} value={x.index}>{x?.name}</Option>
                    )
                )}
            </Select>
            <GlobalLineGraphics />
            <Column  className={"barGraphics"} {...config} />
        </div>
    );
}

export default Graphics;
