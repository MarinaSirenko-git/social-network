import React from 'react';
import { Input } from 'antd';
import './FilterContacts.css';

function FilterContacts({onSearch}) {
  const { Search } = Input;
  return(
    <Search
      className="filter-contacts"
      placeholder="введите имя"
      allowClear
      enterButton="Search"
      size="medium"
      onSearch={onSearch}
  />
  )
}

export default FilterContacts;