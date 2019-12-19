import React from "react";
import {Button, Input, List} from "antd";
import { Table } from 'antd';

const columns = [
    {
        title: 'name',
        dataIndex: 'name',
    },
    {
        title: 'size',
        dataIndex: 'size',
    }
];

const TodoUI = (props)=>{
    return(
        <div style={{marginTop: '10px',marginLeft:'10px'}}>
            <div>
                <Input value={props.zip}
                       id="zip"
                       placeholder="Zip Code"
                       style={{width:300, marginRight: '10px'}}
                       onChange={props.handleInputChange}
                />
                <Input value={props.predominant}
                       placeholder="Predominant"
                       id="predominant"
                       style={{width:300, marginRight: '10px'}}
                       onChange={props.handleInputChange}
                />
                <Input value={props.year}
                       placeholder="Year"
                       style={{width:300, marginRight: '10px'}}
                       id="year"
                       onChange={props.handleInputChange}
                />
                <Button type="primary"
                        onClick={function () {
                            props.handleClick(props.zip,props.predominant,props.year);
                        }}
                >Search</Button>
            </div>

            <Table
                columns={columns}
                dataSource={props.list}
                bordered
                title={() => 'Header'}
                footer={() => 'Footer'}
            />

        </div>
    );
}


export default TodoUI;
