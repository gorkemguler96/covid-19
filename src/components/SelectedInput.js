import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';


function SelectedInput(props) {


        const data = [
            {
                type: 'Infected',
                sales: 38,
            },
            {
                type: 'Recovred',
                sales: 52,
            },
            {
                type: 'Deaths',
                sales: 61,
            },
            {
                type: 'Active',
                sales: 145,
            },
        ];
        const config = {
            data,
            xField: 'type',
            yField: 'sales',
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
                    alias: '500',
                },
                sales: {
                    alias: '500',
                },
            },
        };

    return (
        <div className={"SelectedInput"}>
            <Column  {...config} />
        </div>
    );
}

export default SelectedInput;
