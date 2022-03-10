import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/plots';
import {Select} from "antd";
import {inputChange} from "../redux/dataSlice";
import {useDispatch} from "react-redux";

function GlobalGraph({inputDefaultValue}) {

    const [data,setData] = useState([])
    const [deneme,setDeneme] = useState([])
    const dispatch = useDispatch();
    const [selectInput,setSelectInput] = useState([])
    const { Option } = Select;

    useEffect(()=> {
        const globalGraph = async () => {
            await fetch("https://covid19.mathdro.id/api/daily/").then((response)=>{
                response.json().then((json)=> {
                    setDeneme(json.map((x)=>x.deaths))
                    setData(json.map((x)=>x))

                })
            }).catch((error)=>{
                console.log(error)
            })
        }
        globalGraph()
    },[])

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

    const handleChange = (e) => {
        dispatch(inputChange(e))
    }

    return (
        <div>
            <Select onChange={handleChange} style={{width:426}} defaultValue={inputDefaultValue}>
                {selectInput?.countries?.map((x,index)=> (
                        <Option key={x.name} value={x.index}>{x?.name}</Option>
                    )
                )}
            </Select>
            <DualAxes {...config} />
        </div>
    );
}

export default GlobalGraph;
