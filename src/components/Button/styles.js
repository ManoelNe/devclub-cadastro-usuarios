import styled from "styled-components";
import { Background } from "../TopBackround/styles";

export const Button = styled.button`
        border: ${ props => props.theme ==='primary' ? 'none' : '1px solid #fff'};
        background: ${ props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
        font-size: 16px;
        color: ${ props => props.theme ==='primary' ? '#fff' : '#ffff00'};
        padding: 16px 32px;
        width: fit-content;
        cursor: pointer;
        border-radius: 30px;
        

        &:hover{
            opacity:${ props => props.theme ==='primary' ? '0.8' : '0.9'};

        }

        &:active{
            opacity: 0.5;
        }

`
