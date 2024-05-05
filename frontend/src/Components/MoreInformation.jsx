import React from 'react';
import { Card } from 'antd';
import 'animate.css';


const MoreInformation = ({ title, explanation }) => {
    return (
        <Card style={{  margin: 50, backgroundColor: 'rgba(85, 83, 84, 0.40)' }}>
            <p>Title: {title}</p>
            <p>Explanation: {explanation}</p>
        </Card>
    );
};

export default MoreInformation;
