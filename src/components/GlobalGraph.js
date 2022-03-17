import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/plots';
import {Select} from "antd";
import {inputChange} from "../redux/dataSlice";
import {useDispatch} from "react-redux";

function GlobalGraph({inputDefaultValue}) {

    const [data,setData] = useState([])
    const dispatch = useDispatch();
    const Global = "Global"
    const [selectInput,setSelectInput] = useState( {Global})
    const { Option } = Select;
    console.log(selectInput)

    useEffect(()=> {
        const globalGraph = async () => {
            await fetch("https://covid19.mathdro.id/api/daily/").then((response)=>{
                response.json().then((json)=> {
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
                    setSelectInput({...selectInput,json})
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
        yField: ['totalConfirmed'],
        geometryOptions: [
            {
                geometry: 'line',
                color: 'rgba(91,143,249,0.76)',
            },
            {
                geometry: 'line',
                color: '#fc5e5e',
            },
        ],
    };
    const handleChange = (e) => {

        dispatch(inputChange(e))

    }

    return (
        <div>
            <Select onChange={handleChange} style={{width:426}} defaultValue={inputDefaultValue}>
                {selectInput?.json?.countries?.map((x,index)=>
                    <Option key={x.name} value={x.index}>{x?.name}</Option>
                )}
            </Select>
            <DualAxes className={"barGraphics"} {...config} />
        </div>
    );
}

export default GlobalGraph;
