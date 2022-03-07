import React from 'react';
import {Select,} from 'antd';

function SelectedInput(props) {

    const { Option } = Select;

    return (
        <div className={"SelectedInput"}>
            <Select style={{width:426}} defaultValue="Option1">
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
            </Select>
        </div>
    );
}

export default SelectedInput;
