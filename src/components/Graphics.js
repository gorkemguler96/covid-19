import React, {useEffect, useState} from 'react';
import {Select,} from 'antd';
import {useSelector,useDispatch} from "react-redux";
import { Column } from '@ant-design/plots';
import { inputChange } from '../redux/dataSlice'
import GlobalLineGraphics from "./GlobalLineGraphics";
import BoostrapChart from "./BoostrapChart";



function Graphics(props) {

    const { Option } = Select;
    const [chart,setChart] = useState([])
    const [selectInput,setSelectInput] = useState([])
    const dispatch = useDispatch();
    const ulke = useSelector((state) => state.data.selectInput)



    useEffect(()=> {
        const fetchCountry = async () => {
            await fetch(`https://covid19.mathdro.id/api/countries/${ulke}`).then((response)=>{
                response.json().then((json)=> {
                    setChart(json)
                })
            })
        }
        fetchCountry()

    },[ulke])

    useEffect(()=> {
        const countrySiralama = async () => {
            await fetch("https://covid19.mathdro.id/api/countries/").then((response)=>{
                response.json().then((json)=> {
                    setSelectInput(json)
                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        countrySiralama()

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
        yField: ['quantity'],
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
                alias: "quantity",
            },
        },
    };
    const handleChange = (e) => {
        dispatch(inputChange(e))
    }

    return (
        <div className={"Graphics"}>
            <Select onChange={handleChange} style={{width:426}} defaultValue="Afghanistan">
                {selectInput?.countries?.map((x,index)=> (
                    <Option key={x.name} value={x.index}>{x?.name}</Option>
                    )
                )}
            </Select>
            {/*<GlobalLineGraphics />*/}
            <BoostrapChart/>
            <Column  className={"barGraphics"} {...config} />
        </div>
    );
}

export default Graphics;
