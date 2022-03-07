import React from 'react';
import { Row, Col } from 'antd';

function Header(props) {
    return (
        <div className={"header"}>
            <Row>
                <Col span={24}>
                    <img src="https://world19covid.web.app/static/media/image.d7265326.png" alt="covid-19"/>
                    <h3>Global and Country Wise Cases of Corona Virus</h3>
                    <p>(For a Particular country, select a Country from below)</p>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
