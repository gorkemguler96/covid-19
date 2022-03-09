import React, {useEffect, useState} from 'react';
import { Row, Col, Card } from 'antd';
import { useSelector } from "react-redux";

function Table(props) {
    const ulke = useSelector((state) => state.data.selectInput)
    const [chart,setChart] = useState([])
    const [lastGuncelleme,setLastGuncelleme] = useState("")

    useEffect(()=> {
        const fetchUlke = async () => {
            await fetch(`https://covid19.mathdro.id/api/countries/${ulke}`).then((response)=>{
                response.json().then((json)=> {
                    setChart(json)
                    const day = new Date(json.lastUpdate).toString().split(" ",5)
                    setLastGuncelleme(day)
                })
            })
        }
        fetchUlke()
    },[ulke])

    return (
        <div className={"Table"}>
            <Row justify={"space-between"}>
                <Col span={6}>
                    <Card className={"Infected"} title="Infected" bordered={false} style={{ width: 216 }}>
                        <h2>{chart?.confirmed?.value.toLocaleString('en-US')}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>
                            {lastGuncelleme[0]} {lastGuncelleme[1]} {lastGuncelleme[2]} {lastGuncelleme[3]}
                        </p>
                        <p style={{fontWeight:100}}>{lastGuncelleme[4]}</p>
                        <p style={{fontWeight:400}}>Number of infect cases of COVID-19</p>
                        <div className={"infectedDiv"}></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Recovered"} title="Recovered" bordered={false} style={{ width: 216 }}>
                        <h2>{chart?.recovered?.value.toLocaleString('en-US')}</h2>
                        <span>
                            <p style={{fontWeight:500}}>Last Updated at :</p>
                            <p style={{fontWeight:100}}>
                                {lastGuncelleme[0]} {lastGuncelleme[1]} {lastGuncelleme[2]} {lastGuncelleme[3]}
                            </p>
                            <p style={{fontWeight:100}}>{lastGuncelleme[4]}</p>
                            <p style={{fontWeight:400}}>Number of recoveries from COVID-19</p>
                            <div className={"recoveredDiv"}></div>
                        </span>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Deaths"} title="Deaths" bordered={false} style={{ width: 216 }}>
                        <h2>{chart?.deaths?.value.toLocaleString('en-US')}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>
                            {lastGuncelleme[0]} {lastGuncelleme[1]} {lastGuncelleme[2]} {lastGuncelleme[3]}
                        </p>
                        <p style={{fontWeight:100}}>{lastGuncelleme[4]}</p>
                        <p style={{fontWeight:400}}>Number of deaths caused by COVID-19</p>
                        <div className={"deathsDiv"}></div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className={"Active"} title="Active" bordered={false} style={{ width: 216 }}>
                        <h2>{(chart?.confirmed?.value- chart?.deaths?.value).toLocaleString('en-US')}</h2>
                        <p style={{fontWeight:500}}>Last Updated at :</p>
                        <p style={{fontWeight:100}}>
                            {lastGuncelleme[0]} {lastGuncelleme[1]} {lastGuncelleme[2]} {lastGuncelleme[3]}
                        </p>
                        <p style={{fontWeight:100}}>{lastGuncelleme[4]}</p>
                        <p style={{fontWeight:400}}>Number of active cases of COVID-19</p>
                        <div className={"activeDiv"}></div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Table;
