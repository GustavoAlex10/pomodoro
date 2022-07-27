import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width:60px;
    height: 60px;
    background-color: green;
`; 

interface Props {
    text: string;
    onClick?: () => void;
    className?: string;
}


export function Button(props: Props): JSX.Element {

    return(
            <ButtonContainer onClick={props.onClick} className={props.className}>
                {props.text}
            </ButtonContainer>

    )
}