import React, {useEffect, useState} from 'react';
import { Column } from '@ant-design/plots';
import {Select} from "antd";
import {inputChange} from "../redux/dataSlice";
import {useDispatch, useSelector} from "react-redux";

function CountryGraph(props) {

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
            value: `${chart?.recovered?.value}`,
        },
        {
            type: 'Deaths',
            value:`${chart?.deaths?.value}`,
        },

        {
            type: 'Active',
            value: `${chart?.confirmed?.value- chart?.deaths?.value}`,
        },
        {
            type: 'Infected',
            value: `${chart?.confirmed?.value}`,
        },
    ];
    const paletteSemanticRed = 'rgba(243,102,74,0.67)';
    const infected = 'rgba(91,143,249,0.78)';
    const active = 'rgba(235,248,143,0.86)';
    const recovered = 'rgb(169,248,143)';
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        color: ({ type }) => {
            if (type === 'Deaths') {
                return paletteSemanticRed;
            }
            else if ( type === 'Active') {
                return active;
            }
            else if (type === 'Recovered'){
                return recovered
            }
            return infected;
        },
        label: {
            style: {
                fill: '#FFFFFF',
                opacity: 1,
            },
        },
        legend: false,
        xAxis: {
            label: {
                autoHide: false,
                autoRotate: false,
            },
        },
    };
    const handleChange = (e) => {
        dispatch(inputChange(e))

    }

    return (
        <div>
            <Select onChange={handleChange} style={{width:426}} defaultValue={ulke}>
                {selectInput?.countries?.map((x,index)=>
                    <Option key={x.name} value={x.index}>{x?.name}</Option>
                )}
            </Select>
            <Column className={"barGraphics"} {...config} />
        </div>
    );
}

export default CountryGraph;
