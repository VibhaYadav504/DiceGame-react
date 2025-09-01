
import styled from "styled-components";
export const Button =styled.button`
    
    padding: 10px 18px;
    color: white;
    gap: 10px;
    background: #000000;
    border-radius: 5px;
    border: none;
    border: none;
    font-size: 16px;
    width: 200px;
    border: 1px solid transparent;
    cursor: pointer;
    transition:  0.4s background ease-in;
    &:hover{
        background-color: #fcfbfb;
        border: 1px solid black;
        color: #000000;
        transition: 0.3s background ease-in;
    }
`;
export const OutlineButton =styled(Button)`
    color: black;
    background-color: white;
     border: 1px solid black;
    &:hover{
        background-color:black;
       
        border: 1px solid transparent;
        color: white;
        
    }
`;