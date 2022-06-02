import React from 'react';
import { AverageDetails } from './Average.styles';


export const Average = (props) => (
    <AverageDetails avg={props.average}>
        {props.average}
    </AverageDetails>
)

