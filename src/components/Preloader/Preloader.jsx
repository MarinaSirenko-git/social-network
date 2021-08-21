import React from 'react';
import { Spin } from 'antd';
import './Preloader.css';

function Preloader(){
  return (
    <div className="preloader">
      <Spin />
    </div>
  )
}

export default Preloader