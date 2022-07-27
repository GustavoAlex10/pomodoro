import React from 'react'
import styled from 'styled-components';
import { secondsToTime } from '../utils/seconds-to-time';

const TimerContainer = styled.div`
    width:60px;
    height: 60px;
    background-color: green;
`; 

interface Props {
  mainTime: number
}


export function Timer(props: Props): JSX.Element {

    return(
            <TimerContainer className='timer' >
                {secondsToTime(props.mainTime)}
            </TimerContainer>

    )
}