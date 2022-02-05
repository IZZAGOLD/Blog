import React from 'react';
import cl from './PostFilter.module.css'
import {Input, Select} from "antd";
const { Option } = Select;

const PostFilter = ({filter, setFilter}) => {
    const handleChangeSelect = (value) => {
        setFilter({...filter, sort: value})
    }
    const handleChangeInput = (event) => {
        setFilter({...filter, query: event.target.value})
    }
    return (
        <div>
            <div className={cl.search}>
            <Input
                value={filter.query}
                onChange={handleChangeInput}
                placeholder="Поиск..." />
            </div>
            <div className={cl.sort}>
            <Select defaultValue="Сортировка" style={{ width: 240 }} onChange={handleChangeSelect}>
                <Option value="" disabled>Сортировка</Option>
                <Option value='title'>По названию</Option>
                <Option value="body">По описанию</Option>
            </Select>
            </div>
        </div>
    );
};

export default PostFilter;