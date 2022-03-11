import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from '../redux/dataSlice'

function GlobalTable(props) {

    const dispatch = useDispatch();
    const items = useSelector(state => state.data.items)
    const [day,setDay] = useState([])


    useEffect(()=>{
        dispatch(fetchData())
    },[])
    useEffect(()=>{
        setDay(new Date(items?.lastUpdate).toString().split(" ",5))
    },[items])

    return (
        <div className={"Table"}>
            <Row justify={"space-between"}>
                <Col span={6}>
                    <Card className={"Recovered"} title="Recovered" bordered={false} style={{ width: 216 }}>
                        <h2>{items?.recovered?.value}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>
                            {day[0]} {day[1]} {day[2]} {day[3]}
                        </p>
                        <p style={{fontWeight:100}}>{day[4]}</p>
                        <p style={{fontWeight:400}}>Number of recoveries from COVID-19</p>
                        <div className={"recoveredDiv"}></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Deaths"} title="Deaths" bordered={false} style={{ width: 216 }}>
                        <h2>{items?.deaths?.value.toLocaleString('en-US')}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>
                            {day[0]} {day[1]} {day[2]} {day[3]}
                        </p>
                        <p style={{fontWeight:100}}>{day[4]}</p>
                        <p style={{fontWeight:400}}>Number of deaths caused by COVID-19</p>
                        <div className={"deathsDiv"}></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Active"} title="Active" bordered={false} style={{ width: 216 }}>
                        <h2>{(items?.confirmed?.value- items?.deaths?.value).toLocaleString('en-US')}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>
                            {day[0]} {day[1]} {day[2]} {day[3]}
                        </p>
                        <p style={{fontWeight:100}}>{day[4]}</p>
                        <p style={{fontWeight:400}}>Number of active cases of COVID-19</p>
                        <div className={"activeDiv"}></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Infected"} title="Infected" bordered={false} style={{ width: 216 }}>
                        <h2>{items?.confirmed?.value.toLocaleString('en-US')}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>
                            {day[0]} {day[1]} {day[2]} {day[3]}
                        </p>
                        <p style={{fontWeight:100}}>{day[4]}</p>
                        <p style={{fontWeight:400}}>Number of infect cases of COVID-19</p>
                        <div className={"infectedDiv"}></div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default GlobalTable;
