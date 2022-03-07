import React, {useEffect} from 'react';
import { Row, Col, Card } from 'antd';
import {fetchData} from '../redux/dataSlice'
import {useDispatch, useSelector} from "react-redux";



function Table(props) {

    const dispatch =useDispatch();
    const data = useSelector((state) => state.data.items)


    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])

    return (
        <div className={"Table"}>
            <Row justify={"space-between"}>
                <Col span={6}>
                    <Card className={"Infected"} title="Infected" bordered={false} style={{ width: 216 }}>
                        <h2>{data.confirmed.value}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>Mon Mar 07 2022</p>
                        <p style={{fontWeight:100}}>11:20:34</p>
                        <p style={{fontWeight:400}}>Number of infect cases of COVID-19</p>
                        <div className={"infectedDiv"}></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Recovered"} title="Recovered" bordered={false} style={{ width: 216 }}>
                        <h2>{data.recovered.value}</h2>
                        <span>
                            <p style={{fontWeight:500}}>Last Updated at :</p>
                            <p style={{fontWeight:100}}>Mon Mar 07 2022</p>
                            <p style={{fontWeight:100}}>11:20:34</p>
                            <p style={{fontWeight:400}}>Number of recoveries from COVID-19</p>
                            <div className={"recoveredDiv"}></div>
                        </span>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Deaths"} title="Deaths" bordered={false} style={{ width: 216 }}>
                        <h2>{data.deaths.value}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>Mon Mar 07 2022</p>
                        <p style={{fontWeight:100}}>11:20:34</p>
                        <p style={{fontWeight:400}}>Number of deaths caused by COVID-19</p>
                        <div className={"deathsDiv"}></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Active"} title="Active" bordered={false} style={{ width: 216 }}>
                        <h2>{data.confirmed.value- data.deaths.value}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>Mon Mar 07 2022</p>
                        <p style={{fontWeight:100}}>11:20:34</p>
                        <p style={{fontWeight:400}}>Number of active cases of COVID-19</p>
                        <div className={"activeDiv"}></div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Table;
